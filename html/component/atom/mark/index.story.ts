import HtmlMark from './index.svelte';
import type { RecipeHtmlMark } from '../../../interface/recipe/mark';
import type { ContractStory } from '../../../interface/contract/story';

/** `<mark>`: Highlight. */
export default {
	component: HtmlMark,
	content: [{ kind: 'text', value: 'Highlighted text' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlMark>;
