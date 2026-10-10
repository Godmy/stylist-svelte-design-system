import HtmlInputDatetimeLocal from './index.svelte';
import type { RecipeHtmlInputDatetimeLocal } from '../../../interface/recipe/input-datetime-local';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<input type="datetime-local">`: Form control. */
export default {
	component: HtmlInputDatetimeLocal,
	args: { value: '2026-10-10T12:30' },
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
} satisfies ContractStory<RecipeHtmlInputDatetimeLocal>;
