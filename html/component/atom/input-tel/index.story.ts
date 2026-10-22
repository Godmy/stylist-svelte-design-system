import HtmlInputTel from '$stylist/html/component/atom/input-tel/index.svelte';
import type { RecipeHtmlInputTel } from '$stylist/html/interface/recipe/input-tel';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="tel">`: Form control. */
export default {
	component: HtmlInputTel,
	args: { value: '+995 555 12 34 56' },
	controls: {
		value: { type: 'text' },
		placeholder: { type: 'text' },
		maxlength: { type: 'number' },
		minlength: { type: 'number' },
		pattern: { type: 'text' },
		size: { type: 'number' },
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
} satisfies ContractStory<RecipeHtmlInputTel>;
