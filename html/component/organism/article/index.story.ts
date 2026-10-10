import HtmlArticle from './index.svelte';
import type { RecipeHtmlArticle } from '../../../interface/recipe/article';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<article>`: Self-contained syndicatable or reusable composition. */
export default {
	component: HtmlArticle,
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
} satisfies ContractStory<RecipeHtmlArticle>;
