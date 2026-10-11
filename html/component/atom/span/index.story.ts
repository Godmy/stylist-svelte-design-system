import HtmlSpan from './index.svelte';
import type { RecipeHtmlSpan } from '../../../interface/recipe/span';
import type { ContractStory } from '../../../interface/contract/story';

/** `<span>`: Generic phrasing container. */
export default {
	component: HtmlSpan,
	content: [{ kind: 'text', value: 'Generic inline text' }]
} satisfies ContractStory<RecipeHtmlSpan>;
