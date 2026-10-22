import HtmlInputTime from '$stylist/html/component/atom/input-time/index.svelte';
import type { RecipeHtmlInputTime } from '$stylist/html/interface/recipe/input-time';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="time">`: Form control. */
export default {
	component: HtmlInputTime,
	args: { value: '12:30' },
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
} satisfies ContractStory<RecipeHtmlInputTime>;
