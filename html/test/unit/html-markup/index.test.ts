import { describe, expect, it } from 'vitest';
import { serializeHtmlMarkup } from '../../../function/serialize/html-markup';
import { resolveHtmlText } from '../../../function/resolve/html-text';
import { transformHtmlText } from '../../../function/transform/html-text';
import type { HtmlNode } from '../../../type/alias/html-node';

describe('editable HTML content', () => {
	it('preserves spaces around inline elements in copied markup', () => {
		const node: HtmlNode = {
			kind: 'element',
			tag: 'p',
			children: [
				{ kind: 'text', value: ' Hello ' },
				{ kind: 'element', tag: 'strong', children: [{ kind: 'text', value: 'world' }] },
				{ kind: 'text', value: ' ! ' }
			]
		};
		expect(serializeHtmlMarkup(node)).toBe('<p> Hello <strong>world</strong> ! </p>');
	});
	it('preserves preformatted text and escapes HTML', () => {
		expect(
			serializeHtmlMarkup({
				kind: 'element',
				tag: 'pre',
				children: [{ kind: 'text', value: '  <x>\n ' }]
			})
		).toBe('<pre>  &lt;x&gt;\n </pre>');
	});
	it('edits a single nested text node without mutating story data', () => {
		const content: HtmlNode[] = [
			{ kind: 'element', tag: 'strong', children: [{ kind: 'text', value: 'Label' }] }
		];
		expect(resolveHtmlText(content)).toBe('Label');
		const changed = transformHtmlText(content, 'Next');
		expect(resolveHtmlText(changed)).toBe('Next');
		expect(resolveHtmlText(content)).toBe('Label');
		expect(resolveHtmlText([...content, { kind: 'text', value: 'Second' }])).toBeNull();
	});
});
