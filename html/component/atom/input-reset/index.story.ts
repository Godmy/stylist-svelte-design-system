import HtmlInputReset from '$stylist/html/component/atom/input-reset/index.svelte';
import type { RecipeHtmlInputReset } from '$stylist/html/interface/recipe/input-reset';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="reset">`: Form control. */
export default {
	component: HtmlInputReset,
	args: { value: 'Reset' },
	controls: {
		value: { type: 'text' },
		disabled: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputReset>;
