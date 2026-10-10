import { HTML_ELEMENT } from '../../../const/record/html-element';
import type { HtmlNode } from '../../../type/alias/html-node';
import type { HtmlElementSpec } from '../../../type/struct/html-element-spec';
import type { HtmlNodeIssue } from '../../../type/struct/html-node-issue';
import type { HtmlElementNode } from '../../../type/struct/html-element-node';
import { checkHtmlConstraints } from '../html-constraints';
import { checkHtmlChild } from '../html-child';

/** Validates a whole HTML composite tree against the registry; returns every issue found. */
export function checkHtmlNode(
	node: HtmlNode,
	path: number[] = [],
	ancestors: readonly HtmlElementNode[] = []
): HtmlNodeIssue[] {
	if (node.kind === 'text') return [];
	const spec: HtmlElementSpec | undefined = HTML_ELEMENT[node.tag];
	if (!spec)
		return [{ code: 'unknown-tag', path, tag: node.tag, message: `Unknown element <${node.tag}>` }];
	const issues: HtmlNodeIssue[] = [];
	const children = (node.children ?? []).filter(
		(child) => child.kind === 'element' || !/^[\t\n\f\r ]*$/.test(child.value)
	);
	if (spec.content === 'empty' && (node.children?.length ?? 0) > 0)
		issues.push({
			code: 'children-in-empty',
			path,
			tag: node.tag,
			message: `<${node.tag}> has no content`
		});
	(node.children ?? []).forEach((child, index) => {
		if (spec.content !== 'empty' && !checkHtmlChild(node, child, { ancestors }))
			issues.push({
				code: 'child-not-allowed',
				path: [...path, index],
				tag: child.kind === 'element' ? child.tag : '#text',
				message: `<${node.tag}> does not accept ${child.kind === 'element' ? `<${child.tag}>` : 'text'}`
			});
		issues.push(...checkHtmlNode(child, [...path, index], [...ancestors, node]));
	});
	const tags: string[] = children.map((child) => (child.kind === 'element' ? child.tag : '#text'));
	if (spec.first && tags.includes(spec.first) && tags[0] !== spec.first)
		issues.push({
			code: 'wrong-first',
			path,
			tag: node.tag,
			message: `<${spec.first}> must be the first child of <${node.tag}>`
		});
	for (const token of spec.required ?? []) {
		const present = token.startsWith('#')
			? children.some(
					(child) =>
						child.kind === 'element' &&
						(HTML_ELEMENT[child.tag]?.categories as readonly string[] | undefined)?.includes(
							token.slice(1)
						)
				)
			: tags.includes(token);
		if (!present)
			issues.push({
				code: 'missing-required',
				path,
				tag: node.tag,
				message: `<${node.tag}> requires ${token}`
			});
	}
	issues.push(...checkHtmlConstraints(node, path, ancestors));
	return issues;
}
