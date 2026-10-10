import HtmlI from './index.svelte';
import type { RecipeHtmlI } from '../../../interface/recipe/i';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<i>`: Alternate voice. */
export default {
	component: HtmlI,
	content: [{ kind: 'text', value: 'Idiomatic phrase' }]
} satisfies ContractStory<RecipeHtmlI>;
