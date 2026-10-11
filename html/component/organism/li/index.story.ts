import HtmlLi from './index.svelte';
import type { RecipeHtmlLi } from '../../../interface/recipe/li';
import type { ContractStory } from '../../../interface/contract/story';

/** `<li>`: List item. */
export default {
	component: HtmlLi,
	controls: {
		value: { type: 'number' }
	},
	content: [{ kind: 'text', value: 'List item' }]
} satisfies ContractStory<RecipeHtmlLi>;
