import HtmlBase from './index.svelte';
import type { RecipeHtmlBase } from '../../../interface/recipe/base';
import type { ContractStory } from '../../../interface/contract/story';

/** `<base>`: Base URL and default target navigable for hyperlinks and forms. */
export default {
	component: HtmlBase,
	args: { href: '/' },
	controls: {
		href: { type: 'text' },
		target: { type: 'select', options: ['_self', '_blank', '_parent', '_top'] }
	}
} satisfies ContractStory<RecipeHtmlBase>;
