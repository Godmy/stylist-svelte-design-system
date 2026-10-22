import HtmlInput from '$stylist/html/component/atom/input/index.svelte';
import type { RecipeHtmlInput } from '$stylist/html/interface/recipe/input';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input>`: Form control. */
export default {
	component: HtmlInput,
	controls: {
		accept: { type: 'text' },
		alt: { type: 'text' },
		autocomplete: { type: 'select', options: ['on', 'off'] },
		checked: { type: 'boolean' },
		disabled: { type: 'boolean' },
		height: { type: 'number' },
		max: { type: 'text' },
		maxlength: { type: 'number' },
		min: { type: 'text' },
		minlength: { type: 'number' },
		multiple: { type: 'boolean' },
		name: { type: 'text' },
		pattern: { type: 'text' },
		placeholder: { type: 'text' },
		readonly: { type: 'boolean' },
		required: { type: 'boolean' },
		size: { type: 'number' },
		src: { type: 'text' },
		step: { type: 'text' },
		type: { type: 'text' },
		value: { type: 'text' },
		width: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInput>;
