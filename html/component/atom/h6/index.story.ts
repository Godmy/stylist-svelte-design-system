import HtmlH6 from './index.svelte';
import type { RecipeHtmlH6 } from '../../../interface/recipe/h6';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<h6>`: Heading. */
export default {
	component: HtmlH6,
	content: [{ kind: 'text', value: 'Heading level 6' }]
} satisfies ContractStory<RecipeHtmlH6>;
