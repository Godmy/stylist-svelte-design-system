import HtmlInputMonth from '$stylist/html/component/atom/input-month/index.svelte';
import type { RecipeHtmlInputMonth } from '$stylist/html/interface/recipe/input-month';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
		disabled: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } }
} satisfies ContractStory<RecipeHtmlInputMonth>;
