import { transform } from 'lightningcss';
import postcss from 'postcss';
import { describe, expect, it } from 'vitest';
import { ManagerThemeCSS } from '$stylist/theme/class/manager/theme-css';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { HTML_STYLE } from '$stylist/html/const/array/html-style';
import { HTML_LAYER_ORDER } from '$stylist/html/const/array/html-layer-order';
import type { HtmlStyleRule } from '$stylist/html/type/struct/html-style-rule';
import { resolveHtmlStyleSelector } from '$stylist/html/function/resolve/html-style-selector';
import { serializeHtmlStylesheet } from '$stylist/html/function/serialize/html-stylesheet';

describe('html skin', () => {
	const rules: readonly HtmlStyleRule[] = HTML_STYLE;
	const css = serializeHtmlStylesheet();

	it.each([THEME_MODE_LIGHT, THEME_MODE_DARK])(
		'keeps highlighted text readable on the warning surface in $mode mode',
		(theme) => {
			const variables = ManagerThemeCSS.convertToCSSVars(theme);
			const mark = rules.find((rule) => rule.target === 'mark')!;
			const luminance = (declaration: string) => {
				const name = declaration.match(/^var\((--[\w-]+),/)?.[1];
				expect(
					name,
					'foreground and background must resolve independently of inherited text'
				).toBeTruthy();
				const color = variables[name!];
				expect(color).toMatch(/^#[\da-f]{6}$/i);
				return [1, 3, 5]
					.map((offset) => parseInt(color.slice(offset, offset + 2), 16) / 255)
					.map((channel) =>
						channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
					)
					.reduce((sum, channel, index) => sum + channel * [0.2126, 0.7152, 0.0722][index], 0);
			};
			const pair = [
				luminance(mark.declarations.color),
				luminance(mark.declarations.background)
			].sort((a, b) => b - a);
			expect((pair[0] + 0.05) / (pair[1] + 0.05)).toBeGreaterThanOrEqual(4.5);
		}
	);

	it('is valid CSS for a strict parser', () => {
		expect(() =>
			transform({ filename: 'html-skin.css', code: Buffer.from(css), errorRecovery: false })
		).not.toThrow();
	});

	it('parses as CSS inside one cascade layer', () => {
		const root = postcss.parse(css);
		expect(root.nodes).toHaveLength(2);
		expect(root.first).toMatchObject({
			type: 'atrule',
			name: 'layer',
			params: HTML_LAYER_ORDER.join(', ')
		});
		expect(root.last).toMatchObject({ type: 'atrule', name: 'layer', params: 'html' });
		let count = 0;
		root.walkRules(() => {
			count++;
		});
		expect(count).toBe(rules.length);
	});

	it('uses only theme tokens, each with a fallback', () => {
		const vars = ManagerThemeCSS.convertToCSSVars(THEME_MODE_LIGHT);
		// Names come escaped (`--layout-spacing-0\.5rem`); compare them unescaped.
		const used = [...css.matchAll(/var\((--(?:[\w-]|\\\.)+)(,?)/g)];
		expect(used.length).toBeGreaterThan(50);
		for (const [, escaped, comma] of used) {
			const name = escaped.replaceAll('\\', '');
			expect(name in vars, name).toBe(true);
			expect(comma, `${name} has no fallback`).toBe(',');
		}
	});

	it('keeps pseudo-elements outside :where() and zero specificity for states', () => {
		for (const match of css.matchAll(/:where\(([^{]*?)\)/g))
			expect(match[1], match[0]).not.toContain('::');
		expect(css).toContain(':where([data-html-skin]) :where(li)::marker');
		expect(css).toContain(':where([data-html-skin]) :where(a[href]:hover)');
	});

	it('expands registry categories with their interactive conditions', () => {
		const interactive = resolveHtmlStyleSelector('#interactive');
		expect(interactive).toEqual(
			expect.arrayContaining(['a[href]', 'button', 'input:not([type="hidden"])', 'video[controls]'])
		);
		expect(resolveHtmlStyleSelector('#heading')).toEqual(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']);
		expect(() => resolveHtmlStyleSelector('#missing')).toThrow();
	});

	it('starts with the canonical layer order, the skin weakest', () => {
		expect(HTML_LAYER_ORDER[0]).toBe('html');
		expect(
			serializeHtmlStylesheet().startsWith(
				'@layer html, typography, svg, mathml, layout, theme, localization;\n@layer html {'
			)
		).toBe(true);
	});

	it('styles the whole page without a scope', () => {
		const page = serializeHtmlStylesheet({ scope: null, layer: 'base' });
		expect(
			page.startsWith(
				'@layer base, typography, svg, mathml, layout, theme, localization;\n@layer base {'
			)
		).toBe(true);
		expect(page).toContain('\t:where(:root) {');
		expect(page).not.toContain('data-html-skin');
	});
});
