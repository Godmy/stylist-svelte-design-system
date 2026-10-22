import { HTML_STYLE } from '$stylist/html/const/array/html-style';
import { HTML_SKIN_SCOPE } from '$stylist/html/const/value/html-skin-scope';
import type { HtmlStyleRule } from '$stylist/html/type/struct/html-style-rule';
import { resolveHtmlStyleSelector } from '$stylist/html/function/resolve/html-style-selector';

/**
 * CSS of the html skin. Rules sit in `@layer <layer>` and inside `:where()`, so they have
 * zero specificity and any component class overrides them. With `scope` (default
 * `[data-html-skin]`) they apply only inside that element; `scope: null` styles the page.
 */
export function serializeHtmlStylesheet(
	options: { rules?: readonly HtmlStyleRule[]; scope?: string | null; layer?: string } = {}
): string {
	const { scope = HTML_SKIN_SCOPE, layer = 'html' } = options;
	const rules: readonly HtmlStyleRule[] = options.rules ?? HTML_STYLE;
	const body = rules
		.map((rule) => {
			const targets = (typeof rule.target === 'string' ? [rule.target] : rule.target).flatMap(
				resolveHtmlStyleSelector
			);
			const root = targets.includes('@scope');
			const selectors = targets.filter((target) => target !== '@scope');
			const list = [
				...(root ? [`:where(${scope ?? ':root'}${rule.state ?? ''})`] : []),
				...(selectors.length
					? [
							`${scope ? `:where(${scope}) ` : ''}:where(${selectors
								.map((selector) => `${selector}${rule.state ?? ''}`)
								.join(', ')})`
						]
					: [])
			].map((selector) => `${selector}${rule.pseudo ?? ''}`);
			// Theme tokens such as `--layout-spacing-0.5rem` are only valid CSS with `\.`.
			const declarations = Object.entries(rule.declarations)
				.map(
					([property, value]) =>
						`\t\t${property}: ${value.replace(/var\((--[\w.-]+)/g, (_, name: string) => `var(${name.replaceAll('.', '\\.')}`)};`
				)
				.join('\n');
			const css = `\t${list.join(',\n\t')} {\n${declarations}\n\t}`;
			return rule.media ? `\t@media ${rule.media} {\n${css}\n\t}` : css;
		})
		.join('\n');
	return `@layer ${layer} {\n${body}\n}\n`;
}
