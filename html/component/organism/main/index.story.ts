import HtmlMain from './index.svelte';
import type { RecipeHtmlMain } from '../../../interface/recipe/main';
import type { ContractStory } from '../../../interface/contract/story';

/** `<main>`: Container for the dominant contents of the document. */
export default {
	component: HtmlMain,
	content: [
		{
			kind: 'element',
			tag: 'p',
			children: [
				{
					kind: 'text',
					value: 'A paragraph of text that wraps across several lines when the preview is narrow.'
				}
			]
		}
	]
} satisfies ContractStory<RecipeHtmlMain>;
