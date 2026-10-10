import HtmlTr from './index.svelte';
import type { RecipeHtmlTr } from '../../../interface/recipe/tr';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<tr>`: Table row. */
export default {
	component: HtmlTr,
	content: [
		{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.1' }] },
		{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.2' }] },
		{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.3' }] }
	]
} satisfies ContractStory<RecipeHtmlTr>;
