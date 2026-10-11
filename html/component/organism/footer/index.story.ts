import HtmlFooter from './index.svelte';
import type { RecipeHtmlFooter } from '../../../interface/recipe/footer';
import type { ContractStory } from '../../../interface/contract/story';

/** `<footer>`: Footer for a page or section. */
export default {
	component: HtmlFooter,
	content: [
		{
			kind: 'element',
			tag: 'p',
			children: [
				{
					kind: 'element',
					tag: 'small',
					children: [{ kind: 'text', value: '© 2026 Example. All rights reserved.' }]
				}
			]
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
} satisfies ContractStory<RecipeHtmlFooter>;
