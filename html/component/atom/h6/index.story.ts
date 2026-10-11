import HtmlH6 from './index.svelte';
import type { RecipeHtmlH6 } from '../../../interface/recipe/h6';
import type { ContractStory } from '../../../interface/contract/story';

/** `<h6>`: Heading. */
export default {
	component: HtmlH6,
	content: [{ kind: 'text', value: 'Heading level 6' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlH6>;
