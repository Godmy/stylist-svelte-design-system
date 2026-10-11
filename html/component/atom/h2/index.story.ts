import HtmlH2 from './index.svelte';
import type { RecipeHtmlH2 } from '../../../interface/recipe/h2';
import type { ContractStory } from '../../../interface/contract/story';

/** `<h2>`: Heading. */
export default {
	component: HtmlH2,
	content: [{ kind: 'text', value: 'Heading level 2' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlH2>;
