import HtmlInputSubmit from './index.svelte';
import type { RecipeHtmlInputSubmit } from '../../../interface/recipe/input-submit';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="submit">`: Form control. */
export default {
	component: HtmlInputSubmit,
	args: { value: 'Submit' },
	controls: {
		value: { type: 'text' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputSubmit>;
