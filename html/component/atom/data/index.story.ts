import HtmlData from './index.svelte';
import type { RecipeHtmlData } from '../../../interface/recipe/data';
import type { ContractStory } from '../../../interface/contract/story';

/** `<data>`: Machine-readable equivalent. */
export default {
	component: HtmlData,
	args: { value: '398' },
	controls: {
		value: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Tomato' }]
} satisfies ContractStory<RecipeHtmlData>;
