import type { HtmlNode } from '../../../type/alias/html-node';

/** Sets the value of every text node; meant for trees where resolveHtmlText found one. */
export function transformHtmlText(nodes: readonly HtmlNode[], value: string): HtmlNode[] {
	return nodes.map((node) =>
		node.kind === 'text'
			? { ...node, value }
			: node.kind === 'element' && node.children
				? { ...node, children: transformHtmlText(node.children, value) }
				: node
	);
}
