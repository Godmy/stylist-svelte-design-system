import HtmlIns from './index.svelte';
import type { RecipeHtmlIns } from '../../../interface/recipe/ins';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<ins>`: An addition to the document. */
export default {
	component: HtmlIns,
	args: { datetime: '2026-10-10' },
	controls: {
		cite: { type: 'text' },
		datetime: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Inserted text' }]
} satisfies ContractStory<RecipeHtmlIns>;
