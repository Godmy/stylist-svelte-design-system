import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import type { ContractStory } from '../../../interface/contract/story';
import { HTML_ELEMENT } from '../../../const/record/html-element';
import type { HtmlTag } from '../../../type/alias/html-tag';
import { checkHtmlNode } from '../../../function/check/html-node';

describe('html stories', () => {
	/** Vitest runs from the package root; `import.meta.url` is not a file URL under jsdom. */
	const domain = resolve('modules/design-system/html/component');
	// Generated barrels (`component/index.ts`, `component/<level>/index.ts`) sit next to the folders.
	const folders = (path: string) =>
		readdirSync(path, { withFileTypes: true })
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name);
	const families = folders(domain).flatMap((level) =>
		folders(`${domain}/${level}`).map((family) => `${level}/${family}`)
	);
	const stories = import.meta.glob<{ default: ContractStory }>(
		'../../../component/*/*/index.story.ts',
		{
			eager: true
		}
	);
	const components = import.meta.glob<{ default: unknown }>('../../../component/*/*/index.svelte', {
		eager: true
	});
	const entries = Object.entries(stories).map(([path, module]) => ({
		family: path.replace('../../../component/', '').replace('/index.story.ts', ''),
		path,
		story: module.default
	}));

	it('covers every html component with index.story.ts', () => {
		for (const family of families)
			expect(existsSync(`${domain}/${family}/index.story.ts`), family).toBe(true);
		expect(entries).toHaveLength(families.length);
	});

	it('renders the component of its own folder', () => {
		for (const { path, story } of entries)
			expect(story.component, path).toBe(components[path.replace('.story.ts', '.svelte')].default);
	});

	it('keeps args and presets structured-cloneable for postMessage', () => {
		for (const { family, story } of entries) {
			expect(() => structuredClone(story.args ?? {}), family).not.toThrow();
			expect(() => structuredClone(story.presets ?? {}), family).not.toThrow();
		}
	});

	it('gives every content tree a valid composition for its element', () => {
		for (const { family, story } of entries) {
			const name = family.split('/')[1];
			const tag = (name.startsWith('input-') ? 'input' : name) as HtmlTag;
			if (!story.content || !(tag in HTML_ELEMENT)) continue;
			const attrs = Object.fromEntries(
				Object.entries(story.args ?? {}).filter(([, value]) =>
					['string', 'number', 'boolean'].includes(typeof value)
				)
			) as Record<string, string | number | boolean>;
			const issues = checkHtmlNode({ kind: 'element', tag, attrs, children: [...story.content] });
			expect(issues, family).toEqual([]);
		}
	});
});
