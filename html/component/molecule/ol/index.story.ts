import HtmlOl from '$stylist/html/component/molecule/ol/index.svelte';
import type { RecipeHtmlOl } from '$stylist/html/interface/recipe/ol';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<ol>`: Ordered list. */
export default {
	component: HtmlOl,
	args: { start: 1 },
	controls: {
		reversed: { type: 'boolean' },
		start: { type: 'number' },
		type: { type: 'select', options: ['1', 'a', 'A', 'i', 'I'] },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'First step' }] },
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Second step' }] },
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Third step' }] }
	]
} satisfies ContractStory<RecipeHtmlOl>;
