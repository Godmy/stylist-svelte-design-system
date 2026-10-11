import HtmlDt from './index.svelte';
import type { RecipeHtmlDt } from '../../../interface/recipe/dt';
import type { ContractStory } from '../../../interface/contract/story';

/** `<dt>`: Legend for corresponding dd element(s). */
export default {
	component: HtmlDt,
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
} satisfies ContractStory<RecipeHtmlDt>;
