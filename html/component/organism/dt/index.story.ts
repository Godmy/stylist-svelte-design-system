import HtmlDt from '$stylist/html/component/organism/dt/index.svelte';
import type { RecipeHtmlDt } from '$stylist/html/interface/recipe/dt';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<dt>`: Legend for corresponding dd element(s). */
export default {
	component: HtmlDt,
	content: [{ kind: 'text', value: 'Term' }],
	context: {
		kind: 'element',
		tag: 'dl',
		children: [
			{ kind: 'outlet' },
			{ kind: 'element', tag: 'dd', children: [{ kind: 'text', value: 'Definition of the term.' }] }
		]
	},
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlDt>;
