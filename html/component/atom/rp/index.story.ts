import HtmlRp from './index.svelte';
import type { RecipeHtmlRp } from '../../../interface/recipe/rp';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<rp>`: Parenthesis for ruby annotation text. */
export default {
	component: HtmlRp
} satisfies ContractStory<RecipeHtmlRp>;
