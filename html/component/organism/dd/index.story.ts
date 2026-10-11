import HtmlDd from './index.svelte';
import type { RecipeHtmlDd } from '../../../interface/recipe/dd';
import type { ContractStory } from '../../../interface/contract/story';

/** `<dd>`: Content for corresponding dt element(s). */
export default {
	component: HtmlDd,
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
} satisfies ContractStory<RecipeHtmlDd>;
