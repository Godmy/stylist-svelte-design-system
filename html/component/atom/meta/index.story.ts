import HtmlMeta from './index.svelte';
import type { RecipeHtmlMeta } from '../../../interface/recipe/meta';
import type { ContractStory } from '../../../interface/contract/story';

/** `<meta>`: Text metadata. */
export default {
	component: HtmlMeta,
	args: { name: 'description', content: 'Story of the meta element' },
	controls: {
		name: { type: 'text' },
		content: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlMeta>;
