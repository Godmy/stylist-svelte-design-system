import HtmlTd from './index.svelte';
import type { RecipeHtmlTd } from '../../../interface/recipe/td';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<td>`: Table cell. */
export default {
	component: HtmlTd,
	args: { colspan: 1 },
	controls: {
		colspan: { type: 'number' },
		rowspan: { type: 'number' }
	},
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
} satisfies ContractStory<RecipeHtmlTd>;
