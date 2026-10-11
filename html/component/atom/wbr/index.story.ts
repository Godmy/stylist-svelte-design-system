import HtmlWbr from './index.svelte';
import type { RecipeHtmlWbr } from '../../../interface/recipe/wbr';
import type { ContractStory } from '../../../interface/contract/story';

/** `<wbr>`: Line breaking opportunity. */
export default {
	component: HtmlWbr
} satisfies ContractStory<RecipeHtmlWbr>;
