import HtmlCaption from './index.svelte';
import type { RecipeHtmlCaption } from '../../../interface/recipe/caption';
import type { ContractStory } from '../../../interface/contract/story';

/** `<caption>`: Table caption. */
export default {
	component: HtmlCaption,
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
} satisfies ContractStory<RecipeHtmlCaption>;
