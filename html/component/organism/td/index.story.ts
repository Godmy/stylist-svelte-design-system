import HtmlTd from './index.svelte';
import type { RecipeHtmlTd } from '../../../interface/recipe/td';
import type { ContractStory } from '../../../interface/contract/story';

/** `<td>`: Table cell. */
export default {
	component: HtmlTd,
	args: { colspan: 1 },
	controls: {
		colspan: { type: 'number' },
		rowspan: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Cell' }],
	context: {
		kind: 'element',
		tag: 'table',
		children: [
			{
				kind: 'element',
				tag: 'tbody',
				children: [{ kind: 'element', tag: 'tr', children: [{ kind: 'outlet' }] }]
			}
		]
	}
} satisfies ContractStory<RecipeHtmlTd>;
