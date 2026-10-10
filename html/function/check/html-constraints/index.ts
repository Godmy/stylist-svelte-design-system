import { HTML_ELEMENT } from '../../../const/record/html-element';
import type { HtmlElementNode } from '../../../type/struct/html-element-node';
import type { HtmlNodeIssue } from '../../../type/struct/html-node-issue';
import { checkHtmlRawText } from '../html-raw-text';

/** Additional ordered/contextual constraints. The validation report records uncovered rules. */
export function checkHtmlConstraints(
	node: HtmlElementNode,
	path: number[] = [],
	ancestors: readonly HtmlElementNode[] = []
): HtmlNodeIssue[] {
	const issues: HtmlNodeIssue[] = [];
	const elements = (node.children ?? []).filter((child) => child.kind === 'element');
	const tags = elements.map((child) => child.tag);
	const issue = (code: HtmlNodeIssue['code'], message: string) =>
		issues.push({ code, path, tag: node.tag, message });
	const once: Partial<Record<HtmlElementNode['tag'], string[]>> = {
		html: ['head', 'body'],
		head: ['title', 'base'],
		details: ['summary'],
		fieldset: ['legend'],
		figure: ['figcaption'],
		picture: ['img'],
		table: ['caption', 'thead', 'tfoot'],
		optgroup: ['legend'],
		select: ['button']
	};
	for (const tag of once[node.tag] ?? [])
		if (tags.filter((value) => value === tag).length > 1)
			issue('duplicate-child', `<${node.tag}> permits at most one <${tag}>`);
	if (node.tag === 'picture') {
		const image = tags.indexOf('img');
		if (image >= 0 && tags.slice(image + 1).includes('source'))
			issue('wrong-order', '<source> must precede <img> in <picture>');
	}
	if (
		node.tag === 'figure' &&
		tags.includes('figcaption') &&
		tags[0] !== 'figcaption' &&
		tags.at(-1) !== 'figcaption'
	)
		issue('wrong-order', '<figcaption> must be first or last');
	if (node.tag === 'select' && tags.includes('button') && tags[0] !== 'button')
		issue('wrong-order', '<button> must be first in <select>');
	if (node.tag === 'colgroup' && node.attrs?.span != null && elements.length)
		issue('constraint', '<colgroup span> must not contain elements');
	if (
		(node.tag === 'audio' || node.tag === 'video') &&
		node.attrs?.src != null &&
		tags.includes('source')
	)
		issue('constraint', 'Media with src must not contain source elements');
	if (node.tag === 'table') {
		if (tags.includes('tbody') && tags.includes('tr'))
			issue('constraint', 'Table cannot mix direct tr and tbody children');
		const rank: Record<string, number> = {
			caption: 0,
			colgroup: 1,
			thead: 2,
			tbody: 3,
			tr: 3,
			tfoot: 4
		};
		const ordered = tags.filter((tag) => tag in rank);
		if (ordered.some((tag, index) => index > 0 && rank[tag] < rank[ordered[index - 1]]))
			issue('wrong-order', 'Table sections are out of order');
	}
	if (node.tag === 'dl' || (node.tag === 'div' && ancestors.at(-1)?.tag === 'dl')) {
		const groups = tags.filter((tag) => tag !== 'script' && tag !== 'template');
		if (node.tag === 'dl' && groups.includes('div') && groups.some((tag) => tag !== 'div'))
			issue('constraint', 'dl cannot mix div groups and direct dt/dd groups');
		if (!groups.includes('div') && groups.length) {
			let terms = false,
				definitions = false;
			for (const tag of groups) {
				if (tag === 'dt') {
					if (definitions) {
						terms = false;
						definitions = false;
					}
					terms = true;
				}
				if (tag === 'dd') {
					if (!terms) issue('wrong-order', 'dd requires preceding dt');
					definitions = true;
				}
			}
			if (terms && !definitions) issue('missing-required', 'Definition group requires dd');
		}
	}
	const forbidden: Partial<Record<HtmlElementNode['tag'], string[]>> = {
		a: ['a'],
		button: [],
		label: ['label'],
		form: ['form'],
		header: ['header', 'footer'],
		footer: ['header', 'footer'],
		address: [
			'address',
			'header',
			'footer',
			'article',
			'aside',
			'nav',
			'section',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'hgroup'
		],
		dt: [
			'header',
			'footer',
			'article',
			'aside',
			'nav',
			'section',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'hgroup'
		],
		th: [
			'header',
			'footer',
			'article',
			'aside',
			'nav',
			'section',
			'h1',
			'h2',
			'h3',
			'h4',
			'h5',
			'h6',
			'hgroup'
		],
		meter: ['meter'],
		progress: ['progress'],
		dfn: ['dfn'],
		caption: ['table'],
		audio: ['audio', 'video'],
		video: ['audio', 'video']
	};
	const isInteractive = (child: HtmlElementNode) => {
		if (child.tag === 'a') return child.attrs?.href != null;
		if (child.tag === 'input') return child.attrs?.type !== 'hidden';
		if (child.tag === 'audio' || child.tag === 'video')
			return child.attrs?.controls != null && child.attrs.controls !== false;
		if (child.tag === 'img') return child.attrs?.usemap != null;
		return (
			(HTML_ELEMENT[child.tag]?.categories as readonly string[] | undefined)?.includes(
				'interactive'
			) ?? false
		);
	};
	const visit = (child: HtmlElementNode) => {
		if (forbidden[node.tag]?.includes(child.tag))
			issue('forbidden-descendant', `<${node.tag}> cannot contain <${child.tag}>`);
		if (
			(node.tag === 'a' || node.tag === 'button') &&
			(isInteractive(child) || child.attrs?.tabindex != null)
		)
			issue('forbidden-descendant', `<${node.tag}> cannot contain interactive content or tabindex`);
		// Template contents live in a separate DocumentFragment, not as DOM descendants.
		if (child.tag !== 'template')
			for (const next of child.children ?? []) if (next.kind === 'element') visit(next);
	};
	for (const child of elements) visit(child);
	if (node.tag === 'area' && !ancestors.some((parent) => parent.tag === 'map'))
		issue('constraint', 'area requires a map ancestor');
	if (
		node.tag === 'main' &&
		ancestors.some((parent) => !['html', 'body', 'div', 'form'].includes(parent.tag))
	)
		issue('constraint', 'main has a disallowed ancestor');
	if (node.tag === 'bdo' && !['ltr', 'rtl'].includes(String(node.attrs?.dir)))
		issue('attribute-required', 'bdo requires dir=ltr or dir=rtl');
	if (node.tag === 'style' || node.tag === 'script') {
		const content = (node.children ?? [])
			.map((child) => (child.kind === 'text' ? child.value : ''))
			.join('');
		const text = node.attrs?.text === undefined ? content : String(node.attrs.text);
		if (!checkHtmlRawText(node.tag, text))
			issue('constraint', `<${node.tag}> text contains its closing delimiter`);
	}
	return issues;
}
