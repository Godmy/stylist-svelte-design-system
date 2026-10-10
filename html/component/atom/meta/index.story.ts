import HtmlMeta from './index.svelte';
import type { RecipeHtmlMeta } from '../../../interface/recipe/meta';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<meta>`: Text metadata. */
export default {
	component: HtmlMeta,
	args: { name: 'description', content: 'Story of the meta element' },
	controls: {
		name: { type: 'text' },
		content: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlMeta>;
