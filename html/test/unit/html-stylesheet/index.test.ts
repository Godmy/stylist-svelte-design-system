import { transform } from 'lightningcss';
import postcss from 'postcss';
import { describe, expect, it } from 'vitest';
import { ManagerThemeCSS } from '$stylist/theme/class/manager/theme-css';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import { HTML_STYLE } from '../../../const/array/html-style';
import type { HtmlStyleRule } from '../../../type/struct/html-style-rule';
import { resolveHtmlStyleSelector } from '../../../function/resolve/html-style-selector';
import { serializeHtmlStylesheet } from '../../../function/serialize/html-stylesheet';

describe('html skin', () => {
	const rules: readonly HtmlStyleRule[] = HTML_STYLE;
	const css = serializeHtmlStylesheet();
	/** Tokens the theme does not emit yet; components already read them with fallbacks. */
	const pending = ['--font-mono'];

	it('is valid CSS for a strict parser', () => {
		expect(() =>
			transform({ filename: 'html-skin.css', code: Buffer.from(css), errorRecovery: false })
		).not.toThrow();
	});

	it('parses as CSS inside one cascade layer', () => {
		const root = postcss.parse(css);
		expect(root.nodes).toHaveLength(1);
		expect(root.first).toMatchObject({ type: 'atrule', name: 'layer', params: 'html' });
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
			expect(name in vars || pending.includes(name), name).toBe(true);
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

	it('styles the whole page without a scope', () => {
		const page = serializeHtmlStylesheet({ scope: null, layer: 'base' });
		expect(page.startsWith('@layer base {')).toBe(true);
		expect(page).toContain('\t:where(:root) {');
		expect(page).not.toContain('data-html-skin');
	});
});
