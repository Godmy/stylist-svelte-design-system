import HtmlHr from '$stylist/html/component/atom/hr/index.svelte';
import type { RecipeHtmlHr } from '$stylist/html/interface/recipe/hr';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<hr>`: Thematic break. */
export default {
	component: HtmlHr,
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlHr>;
