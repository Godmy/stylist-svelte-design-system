import type { HtmlNode } from '../../../type/alias/html-node';

/** The text of a content tree with exactly one text node (an editable label), else `null`. */
export function resolveHtmlText(nodes: readonly HtmlNode[]): string | null {
	const texts: string[] = [];
	const visit = (node: HtmlNode) => {
		if (node.kind === 'text') texts.push(node.value);
		if (node.kind === 'element') node.children?.forEach(visit);
	};
	nodes.forEach(visit);
	return texts.length === 1 ? texts[0] : null;
}
