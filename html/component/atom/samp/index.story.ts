import HtmlSamp from './index.svelte';
import type { RecipeHtmlSamp } from '../../../interface/recipe/samp';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<samp>`: Computer output. */
export default {
	component: HtmlSamp,
	content: [{ kind: 'text', value: 'File not found.' }]
} satisfies ContractStory<RecipeHtmlSamp>;
