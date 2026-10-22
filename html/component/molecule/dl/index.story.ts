import HtmlDl from '$stylist/html/component/molecule/dl/index.svelte';
import type { RecipeHtmlDl } from '$stylist/html/interface/recipe/dl';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<dl>`: Association list consisting of zero or more name-value groups. */
export default {
	component: HtmlDl,
	content: [
		{ kind: 'element', tag: 'dt', children: [{ kind: 'text', value: 'Term' }] },
		{ kind: 'element', tag: 'dd', children: [{ kind: 'text', value: 'Definition of the term.' }] },
		{ kind: 'element', tag: 'dt', children: [{ kind: 'text', value: 'Another term' }] },
		{ kind: 'element', tag: 'dd', children: [{ kind: 'text', value: 'Its definition.' }] }
	],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlDl>;
