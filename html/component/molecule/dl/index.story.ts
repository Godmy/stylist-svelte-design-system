import HtmlDl from './index.svelte';
import type { RecipeHtmlDl } from '../../../interface/recipe/dl';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<dl>`: Association list consisting of zero or more name-value groups. */
export default {
	component: HtmlDl,
	content: [
		{ kind: 'element', tag: 'dt', children: [{ kind: 'text', value: 'Term' }] },
		{ kind: 'element', tag: 'dd', children: [{ kind: 'text', value: 'Definition of the term.' }] },
		{ kind: 'element', tag: 'dt', children: [{ kind: 'text', value: 'Another term' }] },
		{ kind: 'element', tag: 'dd', children: [{ kind: 'text', value: 'Its definition.' }] }
	]
} satisfies ContractStory<RecipeHtmlDl>;
