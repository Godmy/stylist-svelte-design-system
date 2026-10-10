import HtmlU from './index.svelte';
import type { RecipeHtmlU } from '../../../interface/recipe/u';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<u>`: Unarticulated annotation. */
export default {
	component: HtmlU,
	content: [{ kind: 'text', value: 'Misspeled word' }]
} satisfies ContractStory<RecipeHtmlU>;
