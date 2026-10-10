import HtmlTable from './index.svelte';
import type { RecipeHtmlTable } from '../../../interface/recipe/table';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<table>`: Table. */
export default {
	component: HtmlTable,
	content: [
		{ kind: 'element', tag: 'caption', children: [{ kind: 'text', value: 'Quarterly results' }] },
		{
			kind: 'element',
			tag: 'thead',
			children: [
				{
					kind: 'element',
					tag: 'tr',
					children: [
						{ kind: 'element', tag: 'th', children: [{ kind: 'text', value: 'Header 0.1' }] },
						{ kind: 'element', tag: 'th', children: [{ kind: 'text', value: 'Header 0.2' }] },
						{ kind: 'element', tag: 'th', children: [{ kind: 'text', value: 'Header 0.3' }] }
					]
				}
			]
		},
		{
			kind: 'element',
			tag: 'tbody',
			children: [
				{
					kind: 'element',
					tag: 'tr',
					children: [
						{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.1' }] },
						{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.2' }] },
						{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.3' }] }
					]
				},
				{
					kind: 'element',
					tag: 'tr',
					children: [
						{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 2.1' }] },
						{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 2.2' }] },
						{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 2.3' }] }
					]
				}
			]
		}
	]
} satisfies ContractStory<RecipeHtmlTable>;
