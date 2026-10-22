import HtmlTr from '$stylist/html/component/molecule/tr/index.svelte';
import type { RecipeHtmlTr } from '$stylist/html/interface/recipe/tr';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<tr>`: Table row. */
export default {
	component: HtmlTr,
	content: [
		{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.1' }] },
		{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.2' }] },
		{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.3' }] }
	],
	context: {
		kind: 'element',
		tag: 'table',
		children: [{ kind: 'element', tag: 'tbody', children: [{ kind: 'outlet' }] }]
	},
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlTr>;
