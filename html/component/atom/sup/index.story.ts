import HtmlSup from './index.svelte';
import type { RecipeHtmlSup } from '../../../interface/recipe/sup';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<sup>`: Superscript. */
export default {
	component: HtmlSup,
	content: [{ kind: 'text', value: '2' }]
} satisfies ContractStory<RecipeHtmlSup>;
