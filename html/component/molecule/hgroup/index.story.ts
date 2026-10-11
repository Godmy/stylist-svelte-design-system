import HtmlHgroup from './index.svelte';
import type { RecipeHtmlHgroup } from '../../../interface/recipe/hgroup';
import type { ContractStory } from '../../../interface/contract/story';

/** `<hgroup>`: Heading container. */
export default {
	component: HtmlHgroup,
	content: [
		{ kind: 'element', tag: 'h2', children: [{ kind: 'text', value: 'Product name' }] },
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'A short tagline under the heading' }]
		}
	]
} satisfies ContractStory<RecipeHtmlHgroup>;
