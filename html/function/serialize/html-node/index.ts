import { HTML_ELEMENT } from '../../../const/record/html-element';
import type { HtmlNode } from '../../../type/alias/html-node';
import { serializeHtmlAttributes } from '../html-attributes';
import { serializeHtmlRawText } from '../html-raw-text';

/** Standalone HTML export, including html/head/body attributes. Does not execute scripts. */
export function serializeHtmlNode(node: HtmlNode): string {
	const escape = (text: string) =>
		text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
	if (node.kind === 'text') return escape(node.value);
	const spec = HTML_ELEMENT[node.tag];
	if (!spec) throw new Error(`Unknown HTML element: ${node.tag}`);
	const { text, value, ...rest } = node.attrs ?? {};
	const attrs: Record<string, unknown> = { ...rest };
	if (node.id) attrs['data-html-node'] = node.id;
	if (value !== undefined && node.tag !== 'textarea') attrs.value = value;
	const children = node.children ?? [];
	const content = children.map((child) => (child.kind === 'text' ? child.value : '')).join('');
	if (node.tag === 'style' || node.tag === 'script')
		return serializeHtmlRawText(node.tag, String(text ?? content), attrs);
	const opening = `<${node.tag}${serializeHtmlAttributes(attrs)}>`;
	if (
		[
			'area',
			'base',
			'br',
			'col',
			'embed',
			'hr',
			'img',
			'input',
			'link',
			'meta',
			'source',
			'track',
			'wbr'
		].includes(node.tag)
	)
		return opening;
	const body =
		node.tag === 'textarea'
			? escape(String(value ?? content))
			: node.tag === 'title'
				? escape(String(text ?? content))
				: children.map(serializeHtmlNode).join('');
	return `${opening}${body}</${node.tag}>`;
}
