import HtmlDfn from './index.svelte';
import type { RecipeHtmlDfn } from '../../../interface/recipe/dfn';
import type { ContractStory } from '../../../interface/contract/story';

/** `<dfn>`: Defining instance. */
export default {
	component: HtmlDfn,
	content: [{ kind: 'text', value: 'Hyperlink' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlDfn>;
