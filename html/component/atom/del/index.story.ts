import HtmlDel from './index.svelte';
import type { RecipeHtmlDel } from '../../../interface/recipe/del';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<del>`: A removal from the document. */
export default {
	component: HtmlDel,
	args: { datetime: '2026-10-10' },
	controls: {
		cite: { type: 'text' },
		datetime: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Removed text' }]
} satisfies ContractStory<RecipeHtmlDel>;
