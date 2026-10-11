import HtmlCode from './index.svelte';
import type { RecipeHtmlCode } from '../../../interface/recipe/code';
import type { ContractStory } from '../../../interface/contract/story';

/** `<code>`: Computer code. */
export default {
	component: HtmlCode,
	content: [{ kind: 'text', value: 'const answer = 42;' }]
} satisfies ContractStory<RecipeHtmlCode>;
