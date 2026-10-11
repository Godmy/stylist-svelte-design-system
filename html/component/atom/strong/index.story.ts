import HtmlStrong from './index.svelte';
import type { RecipeHtmlStrong } from '../../../interface/recipe/strong';
import type { ContractStory } from '../../../interface/contract/story';

/** `<strong>`: Importance. */
export default {
	component: HtmlStrong,
	content: [{ kind: 'text', value: 'Important text' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlStrong>;
