import HtmlInputPassword from '$stylist/html/component/atom/input-password/index.svelte';
import type { RecipeHtmlInputPassword } from '$stylist/html/interface/recipe/input-password';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="password">`: Form control. */
export default {
	component: HtmlInputPassword,
	args: { value: 'hunter2' },
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
} satisfies ContractStory<RecipeHtmlInputPassword>;
