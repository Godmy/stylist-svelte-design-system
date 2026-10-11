import HtmlCode from './index.svelte';
import type { RecipeHtmlCode } from '../../../interface/recipe/code';
import type { ContractStory } from '../../../interface/contract/story';

/** `<code>`: Computer code. */
export default {
	component: HtmlCode,
	content: [{ kind: 'text', value: 'const answer = 42;' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlCode>;
