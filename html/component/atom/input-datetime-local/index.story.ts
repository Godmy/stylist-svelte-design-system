import HtmlInputDatetimeLocal from '$stylist/html/component/atom/input-datetime-local/index.svelte';
import type { RecipeHtmlInputDatetimeLocal } from '$stylist/html/interface/recipe/input-datetime-local';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
		disabled: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } }
} satisfies ContractStory<RecipeHtmlInputDatetimeLocal>;
