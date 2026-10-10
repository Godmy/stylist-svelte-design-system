import HtmlColgroup from './index.svelte';
import type { RecipeHtmlColgroup } from '../../../interface/recipe/colgroup';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<colgroup>`: Group of columns in a table. */
export default {
	component: HtmlColgroup,
	controls: {
		span: { type: 'number' }
	},
	content: [
		{ kind: 'element', tag: 'col', attrs: { span: 2 } },
		{ kind: 'element', tag: 'col' }
	]
} satisfies ContractStory<RecipeHtmlColgroup>;
