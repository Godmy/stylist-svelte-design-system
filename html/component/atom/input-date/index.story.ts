import HtmlInputDate from './index.svelte';
import type { RecipeHtmlInputDate } from '../../../interface/recipe/input-date';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="date">`: Form control. */
export default {
	component: HtmlInputDate,
	args: { value: '2026-10-10' },
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
} satisfies ContractStory<RecipeHtmlInputDate>;
