import HtmlIns from './index.svelte';
import type { RecipeHtmlIns } from '../../../interface/recipe/ins';
import type { ContractStory } from '../../../interface/contract/story';

/** `<ins>`: An addition to the document. */
export default {
	component: HtmlIns,
	args: { datetime: '2026-10-10' },
	controls: {
		cite: { type: 'text' },
		datetime: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Inserted text' }]
} satisfies ContractStory<RecipeHtmlIns>;
