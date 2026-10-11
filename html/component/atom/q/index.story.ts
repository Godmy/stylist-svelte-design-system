import HtmlQ from './index.svelte';
import type { RecipeHtmlQ } from '../../../interface/recipe/q';
import type { ContractStory } from '../../../interface/contract/story';

/** `<q>`: Quotation. */
export default {
	component: HtmlQ,
	args: { cite: 'https://example.com' },
	controls: {
		cite: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Simplicity is prerequisite for reliability.' }]
} satisfies ContractStory<RecipeHtmlQ>;
