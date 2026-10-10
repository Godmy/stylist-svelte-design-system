import HtmlHr from './index.svelte';
import type { RecipeHtmlHr } from '../../../interface/recipe/hr';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<hr>`: Thematic break. */
export default {
	component: HtmlHr
} satisfies ContractStory<RecipeHtmlHr>;
