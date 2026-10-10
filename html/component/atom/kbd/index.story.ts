import HtmlKbd from './index.svelte';
import type { RecipeHtmlKbd } from '../../../interface/recipe/kbd';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<kbd>`: User input. */
export default {
	component: HtmlKbd,
	content: [{ kind: 'text', value: 'Ctrl + S' }]
} satisfies ContractStory<RecipeHtmlKbd>;
