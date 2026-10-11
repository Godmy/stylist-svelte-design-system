import HtmlInputButton from './index.svelte';
import type { RecipeHtmlInputButton } from '../../../interface/recipe/input-button';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="button">`: Form control. */
export default {
	component: HtmlInputButton,
	args: { value: 'Input button' },
	controls: {
		value: { type: 'text' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputButton>;
