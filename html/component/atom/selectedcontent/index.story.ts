import HtmlSelectedcontent from './index.svelte';
import type { RecipeHtmlSelectedcontent } from '../../../interface/recipe/selectedcontent';
import type { ContractStory } from '../../../interface/contract/story';

/** `<selectedcontent>`: Mirrors content from an option. */
export default {
	component: HtmlSelectedcontent
} satisfies ContractStory<RecipeHtmlSelectedcontent>;
