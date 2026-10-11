import HtmlB from './index.svelte';
import type { RecipeHtmlB } from '../../../interface/recipe/b';
import type { ContractStory } from '../../../interface/contract/story';

/** `<b>`: Keywords. */
export default {
	component: HtmlB,
	content: [{ kind: 'text', value: 'Bold keyword' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlB>;
