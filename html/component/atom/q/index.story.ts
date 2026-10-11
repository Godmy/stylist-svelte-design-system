import HtmlQ from './index.svelte';
import type { RecipeHtmlQ } from '../../../interface/recipe/q';
import type { ContractStory } from '../../../interface/contract/story';

/** `<q>`: Quotation. */
export default {
	component: HtmlQ,
	args: { cite: 'https://example.com' },
	controls: {
		cite: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Simplicity is prerequisite for reliability.' }]
} satisfies ContractStory<RecipeHtmlQ>;
