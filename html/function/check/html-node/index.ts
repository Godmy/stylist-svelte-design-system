import { HTML_ELEMENT } from '../../../const/record/html-element';
import type { HtmlNode } from '../../../type/alias/html-node';
import type { HtmlOutletNode } from '../../../type/struct/html-outlet-node';
import type { HtmlElementSpec } from '../../../type/struct/html-element-spec';
import type { HtmlNodeIssue } from '../../../type/struct/html-node-issue';
import type { HtmlElementNode } from '../../../type/struct/html-element-node';
import { checkHtmlConstraints } from '../html-constraints';
import { checkHtmlChild } from '../html-child';

/**
 * Validates a whole HTML composite tree against the registry; returns every issue found.
 * An outlet is checked by its placement (checkHtmlChild); a tree permits at most one.
 */
export function checkHtmlNode(
	node: HtmlNode,
	path: number[] = [],
	ancestors: readonly HtmlElementNode[] = []
): HtmlNodeIssue[] {
	const issues: HtmlNodeIssue[] = [];
	if (path.length === 0 && ancestors.length === 0) {
		const outlets: HtmlOutletNode[] = [];
		const collect = (current: HtmlNode) => {
			if (current.kind === 'outlet') outlets.push(current);
			if (current.kind === 'element') current.children?.forEach(collect);
		};
		collect(node);
		if (outlets.length > 1)
			issues.push({
				code: 'duplicate-outlet',
				path,
				message: `A tree permits at most one outlet, found ${outlets.length}`
			});
	}
	if (node.kind !== 'element') return issues;
	const spec: HtmlElementSpec | undefined = HTML_ELEMENT[node.tag];
	if (!spec)
		return [
			...issues,
			{ code: 'unknown-tag', path, tag: node.tag, message: `Unknown element <${node.tag}>` }
		];
	const children = (node.children ?? []).filter(
		(child) =>
			child.kind === 'element' || (child.kind === 'text' && !/^[\t\n\f\r ]*$/.test(child.value))
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
				tag: child.kind === 'element' ? child.tag : `#${child.kind}`,
				message: `<${node.tag}> does not accept ${
					child.kind === 'element' ? `<${child.tag}>` : child.kind === 'text' ? 'text' : 'an outlet'
				}`
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
	const missing: string[] = [];
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
		if (!present) missing.push(token);
	}
	// An outlet child stands for one element supplied later, so it may fill one requirement.
	const outlet = node.children?.some((child) => child.kind === 'outlet') ?? false;
	if (!outlet || missing.length > 1)
		for (const token of missing)
			issues.push({
				code: 'missing-required',
				path,
				tag: node.tag,
				message: `<${node.tag}> requires ${token}`
			});
	issues.push(...checkHtmlConstraints(node, path, ancestors));
	return issues;
}
