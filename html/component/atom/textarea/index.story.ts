import HtmlTextarea from '$stylist/html/component/atom/textarea/index.svelte';
import type { RecipeHtmlTextarea } from '$stylist/html/interface/recipe/textarea';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<textarea>`: Multiline text controls. */
export default {
	component: HtmlTextarea,
	args: { value: 'Multi-line text', rows: 4, cols: 32 },
	controls: {
		autocomplete: { type: 'select', options: ['on', 'off'] },
		cols: { type: 'number' },
		disabled: { type: 'boolean' },
		maxlength: { type: 'number' },
		minlength: { type: 'number' },
		name: { type: 'text' },
		placeholder: { type: 'text' },
		readonly: { type: 'boolean' },
		required: { type: 'boolean' },
		rows: { type: 'number' },
		wrap: { type: 'select', options: ['soft', 'hard'] },
		value: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } }
} satisfies ContractStory<RecipeHtmlTextarea>;
