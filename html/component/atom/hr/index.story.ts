import HtmlHr from './index.svelte';
import type { RecipeHtmlHr } from '../../../interface/recipe/hr';
import type { ContractStory } from '../../../interface/contract/story';

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
