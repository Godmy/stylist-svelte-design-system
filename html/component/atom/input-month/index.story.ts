import HtmlInputMonth from './index.svelte';
import type { RecipeHtmlInputMonth } from '../../../interface/recipe/input-month';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<input type="month">`: Form control. */
export default {
	component: HtmlInputMonth,
	args: { value: '2026-10' },
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
} satisfies ContractStory<RecipeHtmlInputMonth>;
