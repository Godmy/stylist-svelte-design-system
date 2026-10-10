import HtmlOl from './index.svelte';
import type { RecipeHtmlOl } from '../../../interface/recipe/ol';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<ol>`: Ordered list. */
export default {
	component: HtmlOl,
	args: { start: 1 },
	controls: {
		reversed: { type: 'boolean' },
		start: { type: 'number' },
		type: { type: 'select', options: ['1', 'a', 'A', 'i', 'I'] }
	},
	content: [
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'First step' }] },
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Second step' }] },
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Third step' }] }
	]
} satisfies ContractStory<RecipeHtmlOl>;
