import HtmlA from './index.svelte';
import type { RecipeHtmlA } from '../../../interface/recipe/a';
import type { ContractStory } from '../../../interface/contract/story';

/** `<a>`: Hyperlink. */
export default {
	component: HtmlA,
	args: { href: '#story' },
	controls: {
		href: { type: 'text' },
		target: { type: 'select', options: ['_self', '_blank', '_parent', '_top'] },
		download: { type: 'text' },
		rel: { type: 'text' },
		hreflang: { type: 'text' },
		type: { type: 'text' },
		referrerpolicy: {
			type: 'select',
			options: [
				'no-referrer',
				'origin',
				'same-origin',
				'strict-origin-when-cross-origin',
				'unsafe-url'
			]
		}
	},
	content: [{ kind: 'text', value: 'Read the guide' }]
} satisfies ContractStory<RecipeHtmlA>;
