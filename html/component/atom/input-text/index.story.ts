import HtmlInputText from './index.svelte';
import type { RecipeHtmlInputText } from '../../../interface/recipe/input-text';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<input type="text">`: Form control. */
export default {
	component: HtmlInputText,
	args: { value: 'Hello', placeholder: 'Type here' },
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
} satisfies ContractStory<RecipeHtmlInputText>;
