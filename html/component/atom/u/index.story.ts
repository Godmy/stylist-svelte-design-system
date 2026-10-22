import HtmlU from '$stylist/html/component/atom/u/index.svelte';
import type { RecipeHtmlU } from '$stylist/html/interface/recipe/u';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<u>`: Unarticulated annotation. */
export default {
	component: HtmlU,
	content: [{ kind: 'text', value: 'Misspeled word' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlU>;
