import HtmlMenu from './index.svelte';
import type { RecipeHtmlMenu } from '../../../interface/recipe/menu';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<menu>`: Menu of commands. */
export default {
	component: HtmlMenu,
	content: [
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Copy' }] },
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Paste' }] },
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Delete' }] }
	]
} satisfies ContractStory<RecipeHtmlMenu>;
