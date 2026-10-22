import HtmlTh from '$stylist/html/component/organism/th/index.svelte';
import type { RecipeHtmlTh } from '$stylist/html/interface/recipe/th';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<th>`: Table header cell. */
export default {
	component: HtmlTh,
	args: { scope: 'col' },
	controls: {
		colspan: { type: 'number' },
		rowspan: { type: 'number' },
		scope: { type: 'select', options: ['row', 'col', 'rowgroup', 'colgroup'] },
		abbr: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Header' }],
	context: {
		kind: 'element',
		tag: 'table',
		children: [
			{
				kind: 'element',
				tag: 'thead',
				children: [{ kind: 'element', tag: 'tr', children: [{ kind: 'outlet' }] }]
			}
		]
	}
} satisfies ContractStory<RecipeHtmlTh>;
