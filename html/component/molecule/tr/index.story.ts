import HtmlTr from './index.svelte';
import type { RecipeHtmlTr } from '../../../interface/recipe/tr';
import type { ContractStory } from '../../../interface/contract/story';

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
