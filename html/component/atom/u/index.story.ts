import HtmlU from './index.svelte';
import type { RecipeHtmlU } from '../../../interface/recipe/u';
import type { ContractStory } from '../../../interface/contract/story';

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
