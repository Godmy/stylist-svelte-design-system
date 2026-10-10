import HtmlSearch from './index.svelte';
import type { RecipeHtmlSearch } from '../../../interface/recipe/search';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

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
	]
} satisfies ContractStory<RecipeHtmlSearch>;
