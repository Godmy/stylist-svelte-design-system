import HtmlP from './index.svelte';
import type { RecipeHtmlP } from '../../../interface/recipe/p';
import type { ContractStory } from '../../../interface/contract/story';

/** `<p>`: Paragraph. */
export default {
	component: HtmlP,
	content: [
		{
			kind: 'text',
			value: 'A paragraph of text that wraps across several lines when the preview is narrow.'
		}
	],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlP>;
