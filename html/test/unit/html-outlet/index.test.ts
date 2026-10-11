import { describe, expect, it } from 'vitest';
import type { HtmlNode } from '../../../type/alias/html-node';
import { checkHtmlNode } from '../../../function/check/html-node';
import { serializeHtmlNode } from '../../../function/serialize/html-node';
import { transformHtmlOutlet } from '../../../function/transform/html-outlet';

describe('html outlet', () => {
	const outlet: HtmlNode = { kind: 'outlet' };
	const item: HtmlNode = { kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'x' }] };
	const list: HtmlNode = { kind: 'element', tag: 'ul', children: [outlet] };

	it('is valid where the parent accepts some element', () => {
		expect(checkHtmlNode(list)).toEqual([]);
		expect(checkHtmlNode({ kind: 'element', tag: 'p', children: [outlet] })).toEqual([]);
	});

	it('is reported in a parent that takes no elements', () => {
		for (const tag of ['title', 'br', 'textarea'] as const) {
			const issues = checkHtmlNode({ kind: 'element', tag, children: [outlet] });
			expect(issues.length, tag).toBeGreaterThan(0);
		}
		const [issue] = checkHtmlNode({
			kind: 'element',
			tag: 'head',
			children: [{ kind: 'element', tag: 'title', children: [outlet] }]
		});
		expect(issue).toMatchObject({ code: 'child-not-allowed', path: [0, 0], tag: '#outlet' });
	});

	it('permits at most one outlet per tree', () => {
		const issues = checkHtmlNode({ kind: 'element', tag: 'ul', children: [outlet, outlet] });
		expect(issues.map((issue) => issue.code)).toEqual(['duplicate-outlet']);
	});

	it('may stand for one missing required child', () => {
		const body: HtmlNode = { kind: 'element', tag: 'body' };
		expect(checkHtmlNode({ kind: 'element', tag: 'html', children: [outlet, body] })).toEqual([]);
		const issues = checkHtmlNode({ kind: 'element', tag: 'html', children: [outlet] });
		expect(issues.map((issue) => issue.message)).toEqual([
			'<html> requires head',
			'<html> requires body'
		]);
	});

	it('is substituted by transformHtmlOutlet and validated in place', () => {
		const [tree] = transformHtmlOutlet(list, [item]);
		expect(tree).toEqual({ kind: 'element', tag: 'ul', children: [item] });
		expect(checkHtmlNode(tree)).toEqual([]);
		const [wrong] = transformHtmlOutlet(list, [{ kind: 'element', tag: 'div' }]);
		expect(checkHtmlNode(wrong).map((issue) => issue.code)).toEqual(['child-not-allowed']);
	});

	it('serializes to nothing until it is substituted', () => {
		expect(serializeHtmlNode(list)).toBe('<ul></ul>');
		expect(serializeHtmlNode(transformHtmlOutlet(list, [item])[0])).toBe('<ul><li>x</li></ul>');
	});
});
