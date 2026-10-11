import HtmlS from './index.svelte';
import type { RecipeHtmlS } from '../../../interface/recipe/s';
import type { ContractStory } from '../../../interface/contract/story';

/** `<s>`: Inaccurate text. */
export default {
	component: HtmlS,
	content: [{ kind: 'text', value: 'No longer accurate' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlS>;
