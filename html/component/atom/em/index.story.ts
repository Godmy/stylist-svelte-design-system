import HtmlEm from './index.svelte';
import type { RecipeHtmlEm } from '../../../interface/recipe/em';
import type { ContractStory } from '../../../interface/contract/story';

/** `<em>`: Stress emphasis. */
export default {
	component: HtmlEm,
	content: [{ kind: 'text', value: 'Emphasised phrase' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlEm>;
