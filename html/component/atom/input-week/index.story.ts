import HtmlInputWeek from '$stylist/html/component/atom/input-week/index.svelte';
import type { RecipeHtmlInputWeek } from '$stylist/html/interface/recipe/input-week';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
		disabled: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } }
} satisfies ContractStory<RecipeHtmlInputWeek>;
