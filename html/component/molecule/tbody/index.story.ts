import HtmlTbody from './index.svelte';
import type { RecipeHtmlTbody } from '../../../interface/recipe/tbody';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<tbody>`: Group of rows in a table. */
export default {
	component: HtmlTbody,
	content: [
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
} satisfies ContractStory<RecipeHtmlTbody>;
