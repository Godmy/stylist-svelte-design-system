import HtmlB from './index.svelte';
import type { RecipeHtmlB } from '../../../interface/recipe/b';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<b>`: Keywords. */
export default {
	component: HtmlB,
	content: [{ kind: 'text', value: 'Bold keyword' }]
} satisfies ContractStory<RecipeHtmlB>;
