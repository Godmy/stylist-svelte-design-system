import HtmlInputTime from './index.svelte';
import type { RecipeHtmlInputTime } from '../../../interface/recipe/input-time';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="time">`: Form control. */
export default {
	component: HtmlInputTime,
	args: { value: '12:30' },
	controls: {
		value: { type: 'text' },
		min: { type: 'text' },
		max: { type: 'text' },
		step: { type: 'text' },
		readonly: { type: 'boolean' },
		required: { type: 'boolean' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } }
} satisfies ContractStory<RecipeHtmlInputTime>;
