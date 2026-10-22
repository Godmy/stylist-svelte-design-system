import HtmlDd from '$stylist/html/component/organism/dd/index.svelte';
import type { RecipeHtmlDd } from '$stylist/html/interface/recipe/dd';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<dd>`: Content for corresponding dt element(s). */
export default {
	component: HtmlDd,
	content: [{ kind: 'text', value: 'Definition of the term.' }],
	context: {
		kind: 'element',
		tag: 'dl',
		children: [
			{ kind: 'element', tag: 'dt', children: [{ kind: 'text', value: 'Term' }] },
			{ kind: 'outlet' }
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
} satisfies ContractStory<RecipeHtmlDd>;
