import HtmlUl from './index.svelte';
import type { RecipeHtmlUl } from '../../../interface/recipe/ul';
import type { ContractStory } from '../../../interface/contract/story';

/** `<ul>`: List. */
export default {
	component: HtmlUl,
	content: [
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Apples' }] },
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Oranges' }] },
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Pears' }] }
	],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlUl>;
