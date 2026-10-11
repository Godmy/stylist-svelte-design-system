import HtmlTfoot from './index.svelte';
import type { RecipeHtmlTfoot } from '../../../interface/recipe/tfoot';
import type { ContractStory } from '../../../interface/contract/story';

/** `<tfoot>`: Group of footer rows in a table. */
export default {
	component: HtmlTfoot,
	content: [
		{
			kind: 'element',
			tag: 'tr',
			children: [
				{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 9.1' }] },
				{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 9.2' }] },
				{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 9.3' }] }
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
} satisfies ContractStory<RecipeHtmlTfoot>;
