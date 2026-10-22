import { describe, expect, it } from 'vitest';
import { checkHtmlChild } from '$stylist/html/function/check/html-child';
import { checkHtmlNode } from '$stylist/html/function/check/html-node';
import { checkHtmlRawText } from '$stylist/html/function/check/html-raw-text';
import type { HtmlNode } from '$stylist/html/type/alias/html-node';
import type { HtmlTag } from '$stylist/html/type/alias/html-tag';
import sample from '$stylist/html/data/json/html-node-sample/index.json';

describe('html composition', () => {
	const el = (tag: HtmlTag, ...children: HtmlNode[]): HtmlNode => ({
		kind: 'element',
		tag,
		children
	});
	const text = (value: string): HtmlNode => ({ kind: 'text', value });

	describe('checkHtmlChild', () => {
		it.each([
			['ul', el('li'), true],
			['ul', el('div'), false],
			['ul', text(' \n '), true],
			['ul', text('x'), false],
			['p', el('span'), true],
			['p', el('div'), false],
			['table', el('tr'), true],
			['tr', el('td'), true],
			['div', el('li'), false],
			['a', el('div'), true],
			['br', text(' '), false],
			['head', el('title'), true],
			['head', el('div'), false],
			['svg', el('div'), false],
			['select', el('option'), true],
			['title', el('b'), false]
		] as [HtmlTag, HtmlNode, boolean][])('<%s> accepts %o: %s', (parent, child, expected) => {
			expect(checkHtmlChild(parent, child)).toBe(expected);
		});
	});

	describe('checkHtmlNode', () => {
		it('accepts the sample landing page', () => {
			expect(checkHtmlNode(sample as HtmlNode)).toEqual([]);
		});

		it('reports nested, ordering, required and empty-content issues', () => {
			const tree = el(
				'section',
				el('ul', el('div')),
				el('details', el('p'), el('summary')),
				el('picture', el('source')),
				{ kind: 'element', tag: 'br', children: [text('x')] }
			);
			expect(checkHtmlNode(tree).map((issue) => [issue.code, issue.path])).toEqual([
				['child-not-allowed', [0, 0]],
				['wrong-first', [1]],
				['missing-required', [2]],
				['children-in-empty', [3]]
			]);
		});

		it('forbids headings and sectioning content inside th', () => {
			expect(checkHtmlNode(el('th', el('h2'))).map((issue) => issue.code)).toEqual([
				'forbidden-descendant'
			]);
			expect(checkHtmlNode(el('th', el('span'), text('Tea')))).toEqual([]);
		});
		it.each(['hidden', 'HIDDEN', 'HiDdEn'])('treats input type %s as non-interactive', (type) => {
			const input: HtmlNode = { kind: 'element', tag: 'input', attrs: { type } };
			expect(checkHtmlNode(el('button', input))).toEqual([]);
		});
		it.each(['text', 'TEXT', 'unknown'])(
			'still forbids interactive input type %s in button',
			(type) => {
				const input: HtmlNode = { kind: 'element', tag: 'input', attrs: { type } };
				expect(checkHtmlNode(el('button', input)).map((issue) => issue.code)).toContain(
					'forbidden-descendant'
				);
			}
		);

		it('reports raw text that contains its closing delimiter', () => {
			const style = el('style', text('a{}</style><b>x</b>'));
			expect(checkHtmlNode(style).map((issue) => issue.code)).toEqual(['constraint']);
			expect(checkHtmlNode(el('script', text('let a = "</scripts>";')))).toEqual([]);
			expect(checkHtmlRawText('script', 'x</SCRIPT >')).toBe(false);
		});
	});
});
