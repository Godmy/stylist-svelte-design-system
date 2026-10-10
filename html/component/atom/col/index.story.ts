import HtmlCol from './index.svelte';
import type { RecipeHtmlCol } from '../../../interface/recipe/col';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<col>`: Table column. */
export default {
	component: HtmlCol,
	args: { span: 1 },
	controls: {
		span: { type: 'number' }
	}
} satisfies ContractStory<RecipeHtmlCol>;
