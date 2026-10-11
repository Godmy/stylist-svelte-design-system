import HtmlTh from './index.svelte';
import type { RecipeHtmlTh } from '../../../interface/recipe/th';
import type { ContractStory } from '../../../interface/contract/story';

/** `<th>`: Table header cell. */
export default {
	component: HtmlTh,
	args: { scope: 'col' },
	controls: {
		colspan: { type: 'number' },
		rowspan: { type: 'number' },
		scope: { type: 'select', options: ['row', 'col', 'rowgroup', 'colgroup'] },
		abbr: { type: 'text' }
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
} satisfies ContractStory<RecipeHtmlTh>;
