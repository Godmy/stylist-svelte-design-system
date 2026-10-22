import type { HtmlNode } from '$stylist/html/type/alias/html-node';
import { serializeHtmlNode } from '$stylist/html/function/serialize/html-node';

/**
 * Readable HTML for inspection: one element per line, indented by two spaces. Elements
 * without element children stay on one line, so text and raw text keep their exact form.
 */
export function serializeHtmlMarkup(node: HtmlNode, depth = 0): string {
	const pad = '  '.repeat(depth);
	if (node.kind === 'outlet') return '';
	if (node.kind === 'text') return pad + serializeHtmlNode(node);
	const children = node.children ?? [];
	// Whitespace is meaningful in mixed content and preformatted text. Format only
	// element-only containers; never trim or split text around inline elements.
	if (
		children.some((child) => child.kind === 'text') ||
		!children.some((child) => child.kind === 'element') ||
		['pre', 'script', 'style', 'textarea', 'title'].includes(node.tag)
	)
		return pad + serializeHtmlNode(node);
	const close = `</${node.tag}>`;
	const empty = serializeHtmlNode({ ...node, children: [] });
	if (!empty.endsWith(close)) return pad + serializeHtmlNode(node);
	const open = empty.slice(0, -close.length);
	const inner = children
		.map((child) => serializeHtmlMarkup(child, depth + 1))
		.filter(Boolean)
		.join('\n');
	return `${pad}${open}\n${inner}\n${pad}${close}`;
}
