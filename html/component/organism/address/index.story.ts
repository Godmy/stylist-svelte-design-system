import HtmlAddress from './index.svelte';
import type { RecipeHtmlAddress } from '../../../interface/recipe/address';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<address>`: Contact information for a page or article element. */
export default {
	component: HtmlAddress,
	content: [{ kind: 'text', value: 'Jane Doe, 1 Example Street, Tbilisi' }]
} satisfies ContractStory<RecipeHtmlAddress>;
