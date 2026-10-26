import { describe, expect, it } from 'vitest';
import postcss from 'postcss';
import { HTML_LAYER_ORDER } from '$stylist/html/const/array/html-layer-order';

// Localization components sit over the html skin: the canonical layer order, zero-specificity
// selectors, no base typography of their own and logical properties, so the skin, the theme,
// consumer classes and right-to-left languages win.
const sources = import.meta.glob<string>('../../../component/*/*/index.svelte', {
	eager: true,
	query: '?raw',
	import: 'default'
});

const entries = Object.entries(sources)
	.map(([path, source]) => ({
		family: path.replace('../../../component/', '').replace('/index.svelte', ''),
		css: source.includes('<style>')
			? source.slice(source.indexOf('<style>'), source.indexOf('</style>'))
			: null
	}))
	.filter((entry): entry is { family: string; css: string } => entry.css !== null);

/** Parse complete selectors, including multiline :where(), without treating keyframes as rules. */
function selectors(css: string): string[] {
	const result: string[] = [];
	postcss.parse(css.replace(/^<style>/, '')).walkRules((rule) => {
		if (rule.selector === ':global') return;
		if (rule.parent?.type === 'atrule' && rule.parent.name.endsWith('keyframes')) return;
		result.push(...rule.selectors);
	});
	return result;
}

describe('localization style layer', () => {
	it('covers the styled localization components', () => {
		expect(entries.map(({ family }) => family)).toEqual(
			expect.arrayContaining([
				'atom/country-flag',
				'molecule/locale-preview',
				'organism/language-selector',
				'organism/locale-switcher',
				'organism/translation-editor'
			])
		);
	});

	it.each(entries)(
		'$family orders the layers and keeps rules in @layer localization',
		({ css }) => {
			expect(css).toContain(`@layer ${HTML_LAYER_ORDER.join(', ')};`);
			expect(css).toContain('@layer localization {');
		}
	);

	it.each(entries)('$family uses zero-specificity selectors', ({ css }) => {
		for (const selector of selectors(css)) expect(selector).toMatch(/^:where\(/);
	});

	it.each(entries)('$family leaves the font family and body line height to the skin', ({ css }) => {
		expect(css).not.toMatch(/font-family\s*:/);
		expect(css).not.toMatch(/line-height:\s*var\(--line-height-(normal|relaxed)/);
	});

	it.each(entries)('$family uses logical properties for right-to-left languages', ({ css }) => {
		expect(css).not.toMatch(/\b(margin|padding|border)-(left|right)\b/);
		expect(css).not.toMatch(/^\s*(left|right)\s*:/m);
		expect(css).not.toMatch(/text-align:\s*(left|right)/);
	});
});
