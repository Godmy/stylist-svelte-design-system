import HtmlSup from './index.svelte';
import type { RecipeHtmlSup } from '../../../interface/recipe/sup';
import type { ContractStory } from '../../../interface/contract/story';

/** `<sup>`: Superscript. */
export default {
	component: HtmlSup,
	content: [{ kind: 'text', value: '2' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlSup>;
