import HtmlNav from './index.svelte';
import type { RecipeHtmlNav } from '../../../interface/recipe/nav';
import type { ContractStory } from '../../../interface/contract/story';

/** `<nav>`: Section with navigational links. */
export default {
	component: HtmlNav,
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
} satisfies ContractStory<RecipeHtmlNav>;
