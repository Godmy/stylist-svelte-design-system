import HtmlSearch from '$stylist/html/component/organism/search/index.svelte';
import type { RecipeHtmlSearch } from '$stylist/html/interface/recipe/search';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<search>`: Container for search controls. */
export default {
	component: HtmlSearch,
	content: [
		{
			kind: 'element',
			tag: 'label',
			children: [
				{ kind: 'text', value: 'Search ' },
				{ kind: 'element', tag: 'input', attrs: { type: 'search', name: 'q' } }
			]
		}
	],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlSearch>;
