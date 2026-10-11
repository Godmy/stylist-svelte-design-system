import { describe, expect, it } from 'vitest';
import { HTML_STYLE } from '$stylist/html/const/array/html-style';
import { ManagerThemeCSS } from '$stylist/theme/class/manager/theme-css';
import { THEME_MODE_LIGHT } from '$stylist/theme/const/record/theme-mode-light';
import { THEME_MODE_DARK } from '$stylist/theme/const/record/theme-mode-dark';
import { DESIGN_TOKEN_HTML_SUPPLEMENT } from '../../../const/preset/html-supplement';
import { DESIGN_TOKEN_HTML_REQUIREMENT } from '../../../const/record/html-requirement';
import { resolveStyleTokenUsage } from '../../../function/resolve/style-token-usage';
import { checkStyleTokenCoverage } from '../../../function/check/style-token-coverage';

describe('design-token HTML demand', () => {
	it('keeps the demand snapshot in sync with live HTML selectors, states and values', () => {
		expect(JSON.parse(JSON.stringify(resolveStyleTokenUsage(HTML_STYLE)))).toEqual(
			DESIGN_TOKEN_HTML_REQUIREMENT.usages
		);
	});
	it.each([
		['light', THEME_MODE_LIGHT],
		['dark', THEME_MODE_DARK]
	] as const)(
		'%s theme emits all current requirements except the declared mono gap',
		(_, theme) => {
			const variables = ManagerThemeCSS.convertToCSSVars(theme);
			expect(checkStyleTokenCoverage(HTML_STYLE, variables).missing).toEqual(['--font-mono']);
			expect(
				checkStyleTokenCoverage(HTML_STYLE, { ...DESIGN_TOKEN_HTML_SUPPLEMENT, ...variables })
					.missing
			).toEqual([]);
		}
	);
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
