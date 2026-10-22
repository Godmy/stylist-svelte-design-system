import { HTML_ELEMENT } from '$stylist/html/const/record/html-element';
import type { HtmlNode } from '$stylist/html/type/alias/html-node';
import type { HtmlTag } from '$stylist/html/type/alias/html-tag';
import type { HtmlElementSpec } from '$stylist/html/type/struct/html-element-spec';
import type { HtmlElementNode } from '$stylist/html/type/struct/html-element-node';
import type { HtmlValidationContext } from '$stylist/html/type/struct/html-validation-context';

/**
 * Structural content-model filter with ancestor context. `true` does not mean
 * complete conformance: use resolveHtmlValidation for explicit pending conditions.
 */
export function checkHtmlChild(
	parent: HtmlTag | HtmlElementNode,
	child: HtmlNode,
	context: HtmlValidationContext = {}
): boolean {
	const node: HtmlElementNode =
		typeof parent === 'string' ? { kind: 'element', tag: parent } : parent;
	const spec: HtmlElementSpec | undefined = HTML_ELEMENT[node.tag];
	if (!spec || spec.content === 'empty') return false;
	let accepts = spec.accepts;
	const ancestors = context.ancestors ?? [];
	const outer = ancestors.at(-1);
	if (node.tag === 'div' && outer?.tag === 'dl') accepts = ['dt', 'dd', '#script-supporting'];
	if (
		node.tag === 'button' &&
		outer?.tag === 'select' &&
		child.kind === 'element' &&
		child.tag === 'selectedcontent'
	)
		return true;
	if (accepts.includes('#transparent')) {
		const other = accepts.filter((token) => token !== '#transparent');
		if (child.kind === 'element' && other.includes(child.tag)) return true;
		if (outer) return checkHtmlChild(outer, child, { ancestors: ancestors.slice(0, -1) });
		accepts = [...other, '#flow'];
	}
	if (accepts.length === 0) return false;
	// An outlet stands for an element supplied later: valid where some element is accepted.
	if (child.kind === 'outlet')
		return node.tag !== 'svg' && node.tag !== 'math' && accepts.some((token) => token !== '#text');
	if (child.kind === 'text') {
		if (/^[\t\n\f\r ]*$/.test(child.value)) return true;
		return ['#text', '#phrasing', '#flow', '#any'].some((token) => accepts.includes(token));
	}
	const childSpec: HtmlElementSpec | undefined = HTML_ELEMENT[child.tag];
	if (!childSpec) return false;
	if (node.tag === 'svg' || node.tag === 'math') return false;
	if (accepts.includes('#any')) return true;
	return accepts.some((token) => {
		if (token === child.tag) return true;
		return token.startsWith('#') && childSpec.categories.includes(token.slice(1));
	});
}
