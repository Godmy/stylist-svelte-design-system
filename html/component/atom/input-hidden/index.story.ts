import HtmlInputHidden from '$stylist/html/component/atom/input-hidden/index.svelte';
import type { RecipeHtmlInputHidden } from '$stylist/html/interface/recipe/input-hidden';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="hidden">`: Form control. */
export default {
	component: HtmlInputHidden,
	args: { value: 'secret' },
	controls: {
		value: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlInputHidden>;
