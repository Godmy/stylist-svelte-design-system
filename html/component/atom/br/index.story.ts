import HtmlBr from './index.svelte';
import type { RecipeHtmlBr } from '../../../interface/recipe/br';
import type { ContractStory } from '../../../interface/contract/story';

/** `<br>`: Line break, e.g. in poem or postal address. */
export default {
	component: HtmlBr
} satisfies ContractStory<RecipeHtmlBr>;
