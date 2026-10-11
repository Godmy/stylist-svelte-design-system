import HtmlBdo from './index.svelte';
import type { RecipeHtmlBdo } from '../../../interface/recipe/bdo';
import type { ContractStory } from '../../../interface/contract/story';

/** `<bdo>`: Text directionality formatting. */
export default {
	component: HtmlBdo,
	args: { dir: 'rtl' },
	content: [{ kind: 'text', value: 'Right to left' }]
} satisfies ContractStory<RecipeHtmlBdo>;
