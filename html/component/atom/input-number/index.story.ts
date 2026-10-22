import HtmlInputNumber from '$stylist/html/component/atom/input-number/index.svelte';
import type { RecipeHtmlInputNumber } from '$stylist/html/interface/recipe/input-number';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="number">`: Form control. */
export default {
	component: HtmlInputNumber,
	args: { value: 42, min: 0, max: 100, step: 1 },
	controls: {
		value: { type: 'number' },
		min: { type: 'number' },
		max: { type: 'number' },
		step: { type: 'number' },
		placeholder: { type: 'text' },
		readonly: { type: 'boolean' },
		required: { type: 'boolean' },
		disabled: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } }
} satisfies ContractStory<RecipeHtmlInputNumber>;
