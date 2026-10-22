import HtmlInputText from '$stylist/html/component/atom/input-text/index.svelte';
import type { RecipeHtmlInputText } from '$stylist/html/interface/recipe/input-text';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="text">`: Form control. */
export default {
	component: HtmlInputText,
	args: { value: 'Hello', placeholder: 'Type here' },
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
} satisfies ContractStory<RecipeHtmlInputText>;
