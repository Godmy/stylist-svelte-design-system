import HtmlS from './index.svelte';
import type { RecipeHtmlS } from '../../../interface/recipe/s';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<s>`: Inaccurate text. */
export default {
	component: HtmlS,
	content: [{ kind: 'text', value: 'No longer accurate' }]
} satisfies ContractStory<RecipeHtmlS>;
