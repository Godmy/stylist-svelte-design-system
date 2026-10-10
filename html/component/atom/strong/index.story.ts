import HtmlStrong from './index.svelte';
import type { RecipeHtmlStrong } from '../../../interface/recipe/strong';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<strong>`: Importance. */
export default {
	component: HtmlStrong,
	content: [{ kind: 'text', value: 'Important text' }]
} satisfies ContractStory<RecipeHtmlStrong>;
