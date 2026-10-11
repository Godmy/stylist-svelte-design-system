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
	layout: 'fullscreen'
} satisfies ContractStory<RecipeHtmlHead>;
