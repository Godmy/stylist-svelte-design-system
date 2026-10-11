import HtmlHeader from './index.svelte';
import type { RecipeHtmlHeader } from '../../../interface/recipe/header';
import type { ContractStory } from '../../../interface/contract/story';

/** `<header>`: Introductory or navigational aids for a page or section. */
export default {
	component: HtmlHeader,
	content: [
		{ kind: 'element', tag: 'h1', children: [{ kind: 'text', value: 'Site name' }] },
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'Introductory content and navigation aids.' }]
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
} satisfies ContractStory<RecipeHtmlHeader>;
