import HtmlAside from './index.svelte';
import type { RecipeHtmlAside } from '../../../interface/recipe/aside';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<aside>`: Sidebar for tangentially related content. */
export default {
	component: HtmlAside,
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
} satisfies ContractStory<RecipeHtmlAside>;
