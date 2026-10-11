import HtmlH1 from './index.svelte';
import type { RecipeHtmlH1 } from '../../../interface/recipe/h1';
import type { ContractStory } from '../../../interface/contract/story';

/** `<h1>`: Heading. */
export default {
	component: HtmlH1,
	content: [{ kind: 'text', value: 'Heading level 1' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlH1>;
