import { describe, expect, it } from 'vitest';
import { HTML_STYLE } from '$stylist/html/const/preset/html-style';
import { ManagerThemeCSS } from '$stylist/theme/class/manager/theme-css';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { DESIGN_TOKEN_HTML_SUPPLEMENT } from '$stylist/design-token/const/preset/html-supplement';
import { DESIGN_TOKEN_HTML_REQUIREMENT } from '$stylist/design-token/const/record/html-requirement';
import { resolveStyleTokenUsage } from '$stylist/design-token/function/resolve/style-token-usage';
import { checkStyleTokenCoverage } from '$stylist/design-token/function/check/style-token-coverage';
import { TOKEN_FONT_FAMILY } from '$stylist/design-token/const/object/font-family';
import { TOKEN_DURATION } from '$stylist/design-token/const/object/duration';
import { DESIGN_TOKEN_DENSITY } from '$stylist/design-token/const/preset/density';
import { DESIGN_TOKEN_FOCUS } from '$stylist/design-token/const/preset/focus';

describe('design-token HTML demand', () => {
	it('keeps the demand snapshot in sync with live HTML selectors, states and values', () => {
		expect(JSON.parse(JSON.stringify(resolveStyleTokenUsage(HTML_STYLE)))).toEqual(
			DESIGN_TOKEN_HTML_REQUIREMENT.usages
		);
	});
	it.each([
		['light', THEME_MODE_LIGHT],
		['dark', THEME_MODE_DARK]
	] as const)('%s theme emits every current requirement including mono', (_, theme) => {
		const variables = ManagerThemeCSS.convertToCSSVars(theme);
		expect(checkStyleTokenCoverage(HTML_STYLE, variables).missing).toEqual([]);
		expect(variables['--font-mono']).toBe(TOKEN_FONT_FAMILY.mono);
		expect(variables['--font-sans']).toBe(TOKEN_FONT_FAMILY.sans);
		expect(variables['--font-serif']).toBe(TOKEN_FONT_FAMILY.serif);
		expect(variables['--typography-font-family']).toBe(theme.typography.fontFamily);
		expect(variables['--color-primary-600']).toBe(theme.colors.primary[600]);
		expect(variables['--focus-width']).toBe(DESIGN_TOKEN_FOCUS.width);
		expect(variables['--density-block']).toBe(DESIGN_TOKEN_DENSITY.comfortable.block);
		expect(variables['--density-scale']).toBe(DESIGN_TOKEN_DENSITY.comfortable.scale);
		expect(variables['--duration-150']).toBe(TOKEN_DURATION[150]);
		expect(variables['--layout-spacing-0.5rem']).toBe('0.5rem');
		expect(
			checkStyleTokenCoverage(HTML_STYLE, { ...DESIGN_TOKEN_HTML_SUPPLEMENT, ...variables }).missing
		).toEqual([]);
	});
	it('tracks nested fallbacks and escaped names independently of theme', () => {
		const rules = [
			{
				target: 'p',
				declarations: { color: 'var(--a, var(--b, red))', padding: 'var(--gap-0\\.5, 1px)' }
			}
		];
		expect(checkStyleTokenCoverage(rules, { '--a': 'red', '--gap-0.5': '1px' })).toEqual({
			required: ['--a', '--b', '--gap-0.5'],
			emitted: ['--a', '--gap-0.5'],
			missing: ['--b']
		});
	});
});
