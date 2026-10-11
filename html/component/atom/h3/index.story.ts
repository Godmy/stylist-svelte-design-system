import HtmlH3 from './index.svelte';
import type { RecipeHtmlH3 } from '../../../interface/recipe/h3';
import type { ContractStory } from '../../../interface/contract/story';

/** `<h3>`: Heading. */
export default {
	component: HtmlH3,
	content: [{ kind: 'text', value: 'Heading level 3' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlH3>;
