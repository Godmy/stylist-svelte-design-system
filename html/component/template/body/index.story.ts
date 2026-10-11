import HtmlBody from './index.svelte';
import type { RecipeHtmlBody } from '../../../interface/recipe/body';
import type { ContractStory } from '../../../interface/contract/story';

/** `<body>`: Document body. */
export default {
	component: HtmlBody,
	content: [{ kind: 'element', tag: 'p', children: [{ kind: 'text', value: 'Body content.' }] }],
	layout: 'fullscreen',
	context: {
		kind: 'element',
		tag: 'html',
		children: [
			{
				kind: 'element',
				tag: 'head',
				children: [
					{ kind: 'element', tag: 'title', children: [{ kind: 'text', value: 'Story document' }] }
				]
			},
			{ kind: 'outlet' }
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
} satisfies ContractStory<RecipeHtmlBody>;
