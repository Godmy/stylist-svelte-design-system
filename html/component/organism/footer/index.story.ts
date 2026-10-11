import HtmlFooter from './index.svelte';
import type { RecipeHtmlFooter } from '../../../interface/recipe/footer';
import type { ContractStory } from '../../../interface/contract/story';

/** `<footer>`: Footer for a page or section. */
export default {
	component: HtmlFooter,
	content: [
		{
			kind: 'element',
			tag: 'p',
			children: [
				{
					kind: 'text',
					value: 'A paragraph of text that wraps across several lines when the preview is narrow.'
				}
			]
		}
	]
} satisfies ContractStory<RecipeHtmlFooter>;
