import { HTML_ELEMENT } from '../../../const/record/html-element';
import { HTML_INTERACTIVE_CONDITION } from '../../../const/record/html-interactive-condition';
import type { HtmlElementSpec } from '../../../type/struct/html-element-spec';

/**
 * Selectors of one style target: `#<category>` expands to every html-namespace element of
 * that registry category (conditional interactive elements get their condition, e.g.
 * `a[href]`); tags and raw selectors pass through. Unknown categories throw.
 */
export function resolveHtmlStyleSelector(target: string): string[] {
	if (!target.startsWith('#')) return [target];
	const category = target.slice(1);
	const conditions: Record<string, string> = HTML_INTERACTIVE_CONDITION;
	const tags = Object.entries(HTML_ELEMENT as Record<string, HtmlElementSpec>)
		.filter(([, spec]) => spec.namespace === 'html' && spec.categories.includes(category))
		.map(([tag]) =>
			category === 'interactive' && conditions[tag] ? `${tag}${conditions[tag]}` : tag
		);
	if (tags.length === 0) throw new Error(`No html element has category ${target}`);
	return tags;
}
