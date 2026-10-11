import HtmlSection from './index.svelte';
import type { RecipeHtmlSection } from '../../../interface/recipe/section';
import type { ContractStory } from '../../../interface/contract/story';

/** `<section>`: Generic document or application section. */
export default {
	component: HtmlSection,
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
} satisfies ContractStory<RecipeHtmlSection>;
