import HtmlTitle from './index.svelte';
import type { RecipeHtmlTitle } from '../../../interface/recipe/title';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<title>`: Document title. */
export default {
	component: HtmlTitle,
	args: { text: 'Document title' },
	controls: {
		text: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlTitle>;
