import HtmlInputUrl from './index.svelte';
import type { RecipeHtmlInputUrl } from '../../../interface/recipe/input-url';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<input type="url">`: Form control. */
export default {
	component: HtmlInputUrl,
	args: { value: 'https://example.com' },
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
} satisfies ContractStory<RecipeHtmlInputUrl>;
