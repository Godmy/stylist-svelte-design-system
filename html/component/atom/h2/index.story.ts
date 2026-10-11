import HtmlH2 from './index.svelte';
import type { RecipeHtmlH2 } from '../../../interface/recipe/h2';
import type { ContractStory } from '../../../interface/contract/story';

/** `<h2>`: Heading. */
export default {
	component: HtmlH2,
	content: [{ kind: 'text', value: 'Heading level 2' }]
} satisfies ContractStory<RecipeHtmlH2>;
