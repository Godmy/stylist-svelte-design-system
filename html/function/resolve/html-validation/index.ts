import { HTML_ELEMENT } from '../../../const/record/html-element';
import type { HtmlNode } from '../../../type/alias/html-node';
import type { HtmlValidationResult } from '../../../type/struct/html-validation-result';
import { checkHtmlNode } from '../../check/html-node';

/** No false claim of full WHATWG conformance: structural success remains unchecked. */
export function resolveHtmlValidation(node: HtmlNode): HtmlValidationResult {
	const issues = checkHtmlNode(node);
	const pending: HtmlValidationResult['pending'] = [];
	const visit = (current: HtmlNode, path: number[]) => {
		if (current.kind !== 'element') return;
		const spec = HTML_ELEMENT[current.tag];
		if (!spec) return;
		pending.push({
			path,
			source: spec.source,
			reason: spec.restricted
				? 'Additional normative conditions require verification'
				: 'Attribute values, document context and accessibility require verification'
		});
		current.children?.forEach((child, index) => visit(child, [...path, index]));
	};
	visit(node, []);
	return { status: issues.length ? 'invalid' : 'unchecked', issues, pending };
}
