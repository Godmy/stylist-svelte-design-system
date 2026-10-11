import HtmlInputTel from './index.svelte';
import type { RecipeHtmlInputTel } from '../../../interface/recipe/input-tel';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="tel">`: Form control. */
export default {
	component: HtmlInputTel,
	args: { value: '+995 555 12 34 56' },
	controls: {
		value: { type: 'text' },
		placeholder: { type: 'text' },
		maxlength: { type: 'number' },
		minlength: { type: 'number' },
		pattern: { type: 'text' },
		size: { type: 'number' },
		readonly: { type: 'boolean' },
		required: { type: 'boolean' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } }
} satisfies ContractStory<RecipeHtmlInputTel>;
