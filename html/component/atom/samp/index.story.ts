import HtmlSamp from './index.svelte';
import type { RecipeHtmlSamp } from '../../../interface/recipe/samp';
import type { ContractStory } from '../../../interface/contract/story';

/** `<samp>`: Computer output. */
export default {
	component: HtmlSamp,
	content: [{ kind: 'text', value: 'File not found.' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlSamp>;
