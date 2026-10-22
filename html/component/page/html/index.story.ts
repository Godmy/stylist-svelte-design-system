import HtmlHtml from '$stylist/html/component/page/html/index.svelte';
import type { RecipeHtmlHtml } from '$stylist/html/interface/recipe/html';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<html>`: Root element. */
export default {
	component: HtmlHtml,
	args: { lang: 'en' },
	content: [
		{
			kind: 'element',
			tag: 'head',
			children: [
				{ kind: 'element', tag: 'title', children: [{ kind: 'text', value: 'Story document' }] }
			]
		},
		{
			kind: 'element',
			tag: 'body',
			children: [
				{ kind: 'element', tag: 'p', children: [{ kind: 'text', value: 'Body content.' }] }
			]
		}
	],
	layout: 'fullscreen',
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlHtml>;
