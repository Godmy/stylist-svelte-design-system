import HtmlMain from '$stylist/html/component/organism/main/index.svelte';
import type { RecipeHtmlMain } from '$stylist/html/interface/recipe/main';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<main>`: Container for the dominant contents of the document. */
export default {
	component: HtmlMain,
	content: [
		{ kind: 'element', tag: 'h1', children: [{ kind: 'text', value: 'Page title' }] },
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'The dominant content of the document.' }]
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
} satisfies ContractStory<RecipeHtmlMain>;
