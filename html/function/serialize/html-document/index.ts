import type { HtmlElementNode } from '$stylist/html/type/struct/html-element-node';
import { serializeHtmlNode } from '$stylist/html/function/serialize/html-node';
import { checkHtmlNode } from '$stylist/html/function/check/html-node';

/** Exports a full document after structural validation; further normative checks remain explicit. */
export function serializeHtmlDocument(node: HtmlElementNode): string {
	if (node.tag !== 'html') throw new Error('Document root must be html');
	const issues = checkHtmlNode(node);
	if (issues.length) throw new Error(issues.map((issue) => issue.message).join('; '));
	return `<!DOCTYPE html>${serializeHtmlNode(node)}`;
}
