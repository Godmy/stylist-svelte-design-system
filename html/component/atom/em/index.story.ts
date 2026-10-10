import HtmlEm from './index.svelte';
import type { RecipeHtmlEm } from '../../../interface/recipe/em';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<em>`: Stress emphasis. */
export default {
	component: HtmlEm,
	content: [{ kind: 'text', value: 'Emphasised phrase' }]
} satisfies ContractStory<RecipeHtmlEm>;
