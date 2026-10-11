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
		disabled: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputRange>;
