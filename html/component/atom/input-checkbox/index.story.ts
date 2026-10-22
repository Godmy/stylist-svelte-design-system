import HtmlInputCheckbox from '$stylist/html/component/atom/input-checkbox/index.svelte';
import type { RecipeHtmlInputCheckbox } from '$stylist/html/interface/recipe/input-checkbox';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="checkbox">`: Form control. */
export default {
	component: HtmlInputCheckbox,
	args: { checked: true },
	controls: {
		checked: { type: 'boolean' },
		value: { type: 'text' },
		required: { type: 'boolean' },
		disabled: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputCheckbox>;
