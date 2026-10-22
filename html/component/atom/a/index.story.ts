import HtmlA from '$stylist/html/component/atom/a/index.svelte';
import type { RecipeHtmlA } from '$stylist/html/interface/recipe/a';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
		},
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Read the guide' }]
} satisfies ContractStory<RecipeHtmlA>;
