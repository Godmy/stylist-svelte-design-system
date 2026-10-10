import HtmlSmall from './index.svelte';
import type { RecipeHtmlSmall } from '../../../interface/recipe/small';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<small>`: Side comment. */
export default {
	component: HtmlSmall,
	content: [{ kind: 'text', value: 'Fine print' }]
} satisfies ContractStory<RecipeHtmlSmall>;
