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
	],
	context: { kind: 'element', tag: 'table', children: [{ kind: 'outlet' }] },
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlThead>;
