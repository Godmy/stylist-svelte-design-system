import HtmlColgroup from '$stylist/html/component/molecule/colgroup/index.svelte';
import type { RecipeHtmlColgroup } from '$stylist/html/interface/recipe/colgroup';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<colgroup>`: Group of columns in a table. */
export default {
	component: HtmlColgroup,
	controls: {
		span: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [
		{ kind: 'element', tag: 'col', attrs: { span: 2 } },
		{ kind: 'element', tag: 'col' }
	],
	context: {
		kind: 'element',
		tag: 'table',
		children: [
			{ kind: 'outlet' },
			{
				kind: 'element',
				tag: 'tbody',
				children: [
					{
						kind: 'element',
						tag: 'tr',
						children: [
							{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.1' }] },
							{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.2' }] },
							{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.3' }] }
						]
					}
				]
			}
		]
	}
} satisfies ContractStory<RecipeHtmlColgroup>;
