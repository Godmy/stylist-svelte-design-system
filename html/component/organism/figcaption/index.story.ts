import HtmlFigcaption from './index.svelte';
import type { RecipeHtmlFigcaption } from '../../../interface/recipe/figcaption';
import type { ContractStory } from '../../../interface/contract/story';

/** `<figcaption>`: Caption for figure. */
export default {
	component: HtmlFigcaption,
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
} satisfies ContractStory<RecipeHtmlFigcaption>;
