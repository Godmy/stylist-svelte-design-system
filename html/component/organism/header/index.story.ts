import HtmlHeader from './index.svelte';
import type { RecipeHtmlHeader } from '../../../interface/recipe/header';
import type { ContractStory } from '../../../interface/contract/story';

/** `<header>`: Introductory or navigational aids for a page or section. */
export default {
	component: HtmlHeader,
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
} satisfies ContractStory<RecipeHtmlHeader>;
