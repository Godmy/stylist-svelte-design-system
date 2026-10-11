import HtmlVar from './index.svelte';
import type { RecipeHtmlVar } from '../../../interface/recipe/var';
import type { ContractStory } from '../../../interface/contract/story';

/** `<var>`: Variable. */
export default {
	component: HtmlVar,
	content: [{ kind: 'text', value: 'x' }]
} satisfies ContractStory<RecipeHtmlVar>;
