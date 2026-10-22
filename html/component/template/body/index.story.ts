import HtmlBody from '$stylist/html/component/template/body/index.svelte';
import type { RecipeHtmlBody } from '$stylist/html/interface/recipe/body';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
