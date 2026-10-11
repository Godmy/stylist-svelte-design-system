import HtmlInputHidden from './index.svelte';
import type { RecipeHtmlInputHidden } from '../../../interface/recipe/input-hidden';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="hidden">`: Form control. */
export default {
	component: HtmlInputHidden,
	args: { value: 'secret' },
	controls: {
		value: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlInputHidden>;
