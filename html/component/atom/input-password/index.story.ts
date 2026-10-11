import HtmlInputPassword from './index.svelte';
import type { RecipeHtmlInputPassword } from '../../../interface/recipe/input-password';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="password">`: Form control. */
export default {
	component: HtmlInputPassword,
	args: { value: 'hunter2' },
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
} satisfies ContractStory<RecipeHtmlInputPassword>;
