import HtmlDiv from './index.svelte';
import type { RecipeHtmlDiv } from '../../../interface/recipe/div';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<div>`: Generic flow container, or container for name-value groups in dl elements. */
export default {
	component: HtmlDiv,
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
} satisfies ContractStory<RecipeHtmlDiv>;
