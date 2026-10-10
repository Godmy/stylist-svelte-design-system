import HtmlInputReset from './index.svelte';
import type { RecipeHtmlInputReset } from '../../../interface/recipe/input-reset';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<input type="reset">`: Form control. */
export default {
	component: HtmlInputReset,
	args: { value: 'Reset' },
	controls: {
		value: { type: 'text' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputReset>;
