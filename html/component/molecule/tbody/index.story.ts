import HtmlTbody from '$stylist/html/component/molecule/tbody/index.svelte';
import type { RecipeHtmlTbody } from '$stylist/html/interface/recipe/tbody';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<tbody>`: Group of rows in a table. */
export default {
	component: HtmlTbody,
	content: [
		{
			kind: 'element',
			tag: 'tr',
			children: [
				{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.1' }] },
				{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.2' }] },
				{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.3' }] }
			]
		},
		{
			kind: 'element',
			tag: 'tr',
			children: [
				{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 2.1' }] },
				{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 2.2' }] },
				{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 2.3' }] }
			]
		}
	],
	context: { kind: 'element', tag: 'table', children: [{ kind: 'outlet' }] },
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlTbody>;
