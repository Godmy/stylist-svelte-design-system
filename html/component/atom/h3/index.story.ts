import HtmlH3 from './index.svelte';
import type { RecipeHtmlH3 } from '../../../interface/recipe/h3';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<h3>`: Heading. */
export default {
	component: HtmlH3,
	content: [{ kind: 'text', value: 'Heading level 3' }]
} satisfies ContractStory<RecipeHtmlH3>;
