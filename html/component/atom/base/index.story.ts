import HtmlBase from './index.svelte';
import type { RecipeHtmlBase } from '../../../interface/recipe/base';
import type { ContractStory } from '../../../interface/contract/story';

/** `<base>`: Base URL and default target navigable for hyperlinks and forms. */
export default {
	component: HtmlBase,
	args: { href: '/' },
	controls: {
		// The element changes the base URL of the preview document: same-origin paths only.
		href: { type: 'select', options: ['/', '/preview/'] },
		target: { type: 'select', options: ['_self', '_blank', '_parent', '_top'] },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	context: { kind: 'element', tag: 'head', children: [{ kind: 'outlet' }] }
} satisfies ContractStory<RecipeHtmlBase>;
