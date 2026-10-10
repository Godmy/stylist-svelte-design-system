import HtmlInputWeek from './index.svelte';
import type { RecipeHtmlInputWeek } from '../../../interface/recipe/input-week';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<input type="week">`: Form control. */
export default {
	component: HtmlInputWeek,
	args: { value: '2026-W41' },
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
} satisfies ContractStory<RecipeHtmlInputWeek>;
