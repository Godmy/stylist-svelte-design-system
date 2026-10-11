import HtmlDfn from './index.svelte';
import type { RecipeHtmlDfn } from '../../../interface/recipe/dfn';
import type { ContractStory } from '../../../interface/contract/story';

/** `<dfn>`: Defining instance. */
export default {
	component: HtmlDfn,
	content: [{ kind: 'text', value: 'Hyperlink' }]
} satisfies ContractStory<RecipeHtmlDfn>;
