import HtmlLegend from './index.svelte';
import type { RecipeHtmlLegend } from '../../../interface/recipe/legend';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<legend>`: Caption for fieldset. */
export default {
	component: HtmlLegend,
	content: [{ kind: 'text', value: 'Shipping address' }]
} satisfies ContractStory<RecipeHtmlLegend>;
