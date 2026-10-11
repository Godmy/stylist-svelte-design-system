import type { HtmlNode } from '../../../type/alias/html-node';

/**
 * Replaces the outlet of `tree` with `nodes` (a context with its content in place),
 * e.g. to validate or serialize a story context with the story element inserted.
 */
export function transformHtmlOutlet(tree: HtmlNode, nodes: readonly HtmlNode[]): HtmlNode[] {
	if (tree.kind === 'outlet') return [...nodes];
	if (tree.kind === 'text' || !tree.children) return [tree];
	return [
		{ ...tree, children: tree.children.flatMap((child) => transformHtmlOutlet(child, nodes)) }
	];
}
