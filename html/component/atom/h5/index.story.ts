import HtmlH5 from './index.svelte';
import type { RecipeHtmlH5 } from '../../../interface/recipe/h5';
import type { ContractStory } from '../../../interface/contract/story';

/** `<h5>`: Heading. */
export default {
	component: HtmlH5,
	content: [{ kind: 'text', value: 'Heading level 5' }]
} satisfies ContractStory<RecipeHtmlH5>;
