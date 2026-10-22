import HtmlInputRadio from '$stylist/html/component/atom/input-radio/index.svelte';
import type { RecipeHtmlInputRadio } from '$stylist/html/interface/recipe/input-radio';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="radio">`: Form control. */
export default {
	component: HtmlInputRadio,
	args: { checked: true, name: 'story-radio' },
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
} satisfies ContractStory<RecipeHtmlInputRadio>;
