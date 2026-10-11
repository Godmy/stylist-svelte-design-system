import HtmlThead from './index.svelte';
import type { RecipeHtmlThead } from '../../../interface/recipe/thead';
import type { ContractStory } from '../../../interface/contract/story';

/** `<thead>`: Group of heading rows in a table. */
export default {
	component: HtmlThead,
	content: [
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
} satisfies ContractStory<RecipeHtmlThead>;
