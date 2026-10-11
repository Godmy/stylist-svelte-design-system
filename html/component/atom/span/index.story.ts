import HtmlSpan from './index.svelte';
import type { RecipeHtmlSpan } from '../../../interface/recipe/span';
import type { ContractStory } from '../../../interface/contract/story';

/** `<span>`: Generic phrasing container. */
export default {
	component: HtmlSpan,
	content: [{ kind: 'text', value: 'Generic inline text' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlSpan>;
