import HtmlBody from './index.svelte';
import type { RecipeHtmlBody } from '../../../interface/recipe/body';
import type { ContractStory } from '../../../interface/contract/story';

/** `<body>`: Document body. */
export default {
	component: HtmlBody,
	content: [{ kind: 'element', tag: 'p', children: [{ kind: 'text', value: 'Body content.' }] }],
	layout: 'fullscreen'
} satisfies ContractStory<RecipeHtmlBody>;
