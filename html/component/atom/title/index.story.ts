import HtmlTitle from './index.svelte';
import type { RecipeHtmlTitle } from '../../../interface/recipe/title';
import type { ContractStory } from '../../../interface/contract/story';

/** `<title>`: Document title. */
export default {
	component: HtmlTitle,
	args: { text: 'Document title' },
	controls: {
		text: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	context: { kind: 'element', tag: 'head', children: [{ kind: 'outlet' }] }
} satisfies ContractStory<RecipeHtmlTitle>;
