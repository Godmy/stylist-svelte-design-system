import HtmlKbd from './index.svelte';
import type { RecipeHtmlKbd } from '../../../interface/recipe/kbd';
import type { ContractStory } from '../../../interface/contract/story';

/** `<kbd>`: User input. */
export default {
	component: HtmlKbd,
	content: [{ kind: 'text', value: 'Ctrl + S' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlKbd>;
