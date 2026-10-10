import HtmlP from './index.svelte';
import type { RecipeHtmlP } from '../../../interface/recipe/p';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<p>`: Paragraph. */
export default {
	component: HtmlP,
	content: [
		{
			kind: 'text',
			value: 'A paragraph of text that wraps across several lines when the preview is narrow.'
		}
	]
} satisfies ContractStory<RecipeHtmlP>;
