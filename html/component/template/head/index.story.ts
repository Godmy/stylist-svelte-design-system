import HtmlHead from './index.svelte';
import type { RecipeHtmlHead } from '../../../interface/recipe/head';
import type { ContractStory } from '../../../interface/contract/story';

/** `<head>`: Container for document metadata. */
export default {
	component: HtmlHead,
	content: [
		{
			kind: 'element',
			tag: 'meta',
			attrs: { name: 'description', content: 'Story of the head element' }
		}
	],
	layout: 'fullscreen',
	context: {
		kind: 'element',
		tag: 'html',
		children: [
			{ kind: 'outlet' },
			{
				kind: 'element',
				tag: 'body',
				children: [
					{ kind: 'element', tag: 'p', children: [{ kind: 'text', value: 'Body content.' }] }
				]
			}
		]
	},
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlHead>;
