import HtmlSub from './index.svelte';
import type { RecipeHtmlSub } from '../../../interface/recipe/sub';
import type { ContractStory } from '../../../interface/contract/story';

/** `<sub>`: Subscript. */
export default {
	component: HtmlSub,
	content: [{ kind: 'text', value: '2' }]
} satisfies ContractStory<RecipeHtmlSub>;
