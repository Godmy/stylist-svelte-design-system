import HtmlMenu from './index.svelte';
import type { RecipeHtmlMenu } from '../../../interface/recipe/menu';
import type { ContractStory } from '../../../interface/contract/story';

/** `<menu>`: Menu of commands. */
export default {
	component: HtmlMenu,
	content: [
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Copy' }] },
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Paste' }] },
		{ kind: 'element', tag: 'li', children: [{ kind: 'text', value: 'Delete' }] }
	],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlMenu>;
