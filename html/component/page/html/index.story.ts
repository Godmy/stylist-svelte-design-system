import HtmlHtml from './index.svelte';
import type { RecipeHtmlHtml } from '../../../interface/recipe/html';
import type { ContractStory } from '../../../interface/contract/story';

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
	layout: 'fullscreen'
} satisfies ContractStory<RecipeHtmlHtml>;
