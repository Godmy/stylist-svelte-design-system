import HtmlInputEmail from './index.svelte';
import type { RecipeHtmlInputEmail } from '../../../interface/recipe/input-email';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<input type="email">`: Form control. */
export default {
	component: HtmlInputEmail,
	args: { value: 'user@example.com', placeholder: 'name@example.com' },
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
} satisfies ContractStory<RecipeHtmlInputEmail>;
