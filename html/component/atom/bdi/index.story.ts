import HtmlBdi from './index.svelte';
import type { RecipeHtmlBdi } from '../../../interface/recipe/bdi';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<bdi>`: Text directionality isolation. */
export default {
	component: HtmlBdi,
	content: [{ kind: 'text', value: 'إيان' }]
} satisfies ContractStory<RecipeHtmlBdi>;
