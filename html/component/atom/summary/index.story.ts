import HtmlSummary from './index.svelte';
import type { RecipeHtmlSummary } from '../../../interface/recipe/summary';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<summary>`: Caption for details. */
export default {
	component: HtmlSummary,
	content: [{ kind: 'text', value: 'More details' }]
} satisfies ContractStory<RecipeHtmlSummary>;
