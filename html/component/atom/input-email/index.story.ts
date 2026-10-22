import HtmlInputEmail from '$stylist/html/component/atom/input-email/index.svelte';
import type { RecipeHtmlInputEmail } from '$stylist/html/interface/recipe/input-email';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="email">`: Form control. */
export default {
	component: HtmlInputEmail,
	args: { value: 'user@example.com', placeholder: 'name@example.com' },
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
} satisfies ContractStory<RecipeHtmlInputEmail>;
