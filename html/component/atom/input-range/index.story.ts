import HtmlInputRange from './index.svelte';
import type { RecipeHtmlInputRange } from '../../../interface/recipe/input-range';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="range">`: Form control. */
export default {
	component: HtmlInputRange,
	args: { value: 40, min: 0, max: 100, step: 1 },
	controls: {
		value: { type: 'range', min: 0, max: 100, step: 1 },
		min: { type: 'number' },
		max: { type: 'number' },
		step: { type: 'number' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputRange>;
