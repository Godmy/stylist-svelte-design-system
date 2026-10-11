import { existsSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';
import type { ContractStory } from '../../../interface/contract/story';
import { HTML_ELEMENT } from '../../../const/record/html-element';
import type { HtmlTag } from '../../../type/alias/html-tag';
import type { HtmlNode } from '../../../type/alias/html-node';
import type { HtmlElementNode } from '../../../type/struct/html-element-node';
import { checkHtmlNode } from '../../../function/check/html-node';
import { resolveHtmlAddress } from '../../../function/resolve/html-address';
import { transformHtmlOutlet } from '../../../function/transform/html-outlet';

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

	/** The story element as a tree node: its tag, scalar args as attributes and its content. */
	const element = (tag: HtmlTag, story: ContractStory): HtmlElementNode => ({
		kind: 'element',
		tag,
		attrs: Object.fromEntries(
			Object.entries(story.args ?? {}).filter(([, value]) =>
				['string', 'number', 'boolean'].includes(typeof value)
			)
		) as Record<string, string | number | boolean>,
		children: [...(story.content ?? [])]
	});

	it('gives every content tree a valid composition for its element', () => {
		for (const { family, story } of entries) {
			const name = family.split('/')[1];
			const tag = (name.startsWith('input-') ? 'input' : name) as HtmlTag;
			if (!story.content || !(tag in HTML_ELEMENT)) continue;
			expect(checkHtmlNode(element(tag, story)), family).toEqual([]);
		}
	});

	it('places every element with a mandatory parent into a valid context', () => {
		// Parents without `#category` tokens: the element is meaningless outside them.
		const bound = (Object.keys(HTML_ELEMENT) as HtmlTag[]).filter((tag) => {
			const parents: readonly string[] = HTML_ELEMENT[tag].parents;
			return parents.length > 0 && parents.every((token) => !token.startsWith('#'));
		});
		expect(bound).toHaveLength(26);
		// area has a #phrasing parent but only works inside a map.
		for (const tag of [...bound, 'area' as HtmlTag]) {
			const family = resolveHtmlAddress(tag).replace('html/component/', '');
			const story = entries.find((entry) => entry.family === family)?.story;
			expect(story?.context, family).toBeDefined();
			const context = story!.context!;
			const outlets: HtmlNode[] = [];
			const collect = (node: HtmlNode) => {
				if (node.kind === 'outlet') outlets.push(node);
				if (node.kind === 'element') node.children?.forEach(collect);
			};
			collect(context);
			expect(outlets, `${family}: one outlet`).toHaveLength(1);
			const [tree] = transformHtmlOutlet(context, [element(tag, story!)]);
			expect(checkHtmlNode(tree), family).toEqual([]);
		}
	});
});
