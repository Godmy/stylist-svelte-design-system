import HtmlMark from './index.svelte';
import type { RecipeHtmlMark } from '../../../interface/recipe/mark';
import type { ContractStory } from '../../../interface/contract/story';

/** `<mark>`: Highlight. */
export default {
	component: HtmlMark,
	content: [{ kind: 'text', value: 'Highlighted text' }]
} satisfies ContractStory<RecipeHtmlMark>;
