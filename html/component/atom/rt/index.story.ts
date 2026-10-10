import HtmlRt from './index.svelte';
import type { RecipeHtmlRt } from '../../../interface/recipe/rt';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<rt>`: Ruby annotation text. */
export default {
	component: HtmlRt,
	content: [{ kind: 'text', value: 'kan' }]
} satisfies ContractStory<RecipeHtmlRt>;
