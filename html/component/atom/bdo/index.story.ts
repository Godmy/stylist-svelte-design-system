import HtmlBdo from '$stylist/html/component/atom/bdo/index.svelte';
import type { RecipeHtmlBdo } from '$stylist/html/interface/recipe/bdo';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<bdo>`: Text directionality formatting. */
export default {
	component: HtmlBdo,
	args: { dir: 'rtl' },
	content: [{ kind: 'text', value: 'Right to left' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlBdo>;
