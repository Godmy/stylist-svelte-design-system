import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import { HTML_ELEMENT } from '$stylist/html/const/record/html-element';
import { HTML_INPUT_TYPE } from '$stylist/html/const/array/html-input-type';
import type { HtmlTag } from '$stylist/html/type/alias/html-tag';
import type { HtmlElementSpec } from '$stylist/html/type/struct/html-element-spec';
import { createHtmlBlock } from '$stylist/html/function/create/html-block';
import { createHtmlBlockList } from '$stylist/html/function/create/html-block-list';
import { resolveHtmlAddress } from '$stylist/html/function/resolve/html-address';

describe('html registry', () => {
	const registry: Record<HtmlTag, HtmlElementSpec> = HTML_ELEMENT;
	const tags = Object.keys(registry) as HtmlTag[];
	/** Vitest runs from the package root; `import.meta.url` is not a file URL under jsdom. */
	const domain = `${resolve('modules/design-system/html')}/`;

	describe('HTML_ELEMENT', () => {
		it('covers the 115 elements of the WHATWG index', () => {
			expect(tags).toHaveLength(115);
			expect(tags).toEqual(
				expect.arrayContaining(['search', 'selectedcontent', 'svg', 'math', 'h6'])
			);
			for (const obsolete of ['param', 'center', 'font', 'menuitem', 'rb', 'rtc'])
				expect(tags).not.toContain(obsolete);
		});

		it('has a recipe and a component for every element and input trait', () => {
			for (const tag of tags) {
				expect(existsSync(`${domain}interface/recipe/${tag}/index.ts`), tag).toBe(true);
				expect(existsSync(`${domain}${resolveHtmlAddress(tag).slice(5)}/index.svelte`), tag).toBe(
					true
				);
			}
			for (const type of HTML_INPUT_TYPE)
				expect(existsSync(`${domain}component/atom/input-${type}/index.svelte`), type).toBe(true);
		});

		it('places levels by content model', () => {
			expect(registry.a.level).toBe('atom');
			expect(registry.ul.level).toBe('molecule');
			expect(registry.div.level).toBe('organism');
			expect(registry.body.level).toBe('template');
			expect(registry.html.level).toBe('page');
		});
	});

	describe('createHtmlBlock', () => {
		it('splits leaves and composites', () => {
			expect(createHtmlBlock('br')).not.toHaveProperty('accepts');
			expect(createHtmlBlock('br').shape).toBe('stack');
			expect(createHtmlBlock('div')).toMatchObject({ shape: 'c-block', accepts: ['#flow'] });
			expect(createHtmlBlock('html').shape).toBe('hat');
			expect(createHtmlBlock('title').shape).toBe('stack');
		});

		it('addresses input traits as family-trait', () => {
			expect(createHtmlBlock('input', 'datetime-local')).toMatchObject({
				use: 'html/component/atom/input-datetime-local',
				name: 'HtmlInputDatetimeLocal',
				trait: 'datetime-local',
				fixed: { type: 'datetime-local' }
			});
			expect(createHtmlBlock('input', 'unknown').use).toBe('html/component/atom/input');
			expect(createHtmlBlockList()).toHaveLength(115 + HTML_INPUT_TYPE.length);
		});
	});
});
