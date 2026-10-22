import HtmlInputSubmit from '$stylist/html/component/atom/input-submit/index.svelte';
import type { RecipeHtmlInputSubmit } from '$stylist/html/interface/recipe/input-submit';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="submit">`: Form control. */
export default {
	component: HtmlInputSubmit,
	args: { value: 'Submit' },
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
} satisfies ContractStory<RecipeHtmlInputSubmit>;
