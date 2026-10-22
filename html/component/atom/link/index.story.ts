import HtmlLink from '$stylist/html/component/atom/link/index.svelte';
import type { RecipeHtmlLink } from '$stylist/html/interface/recipe/link';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<link>`: Link metadata. */
export default {
	component: HtmlLink,
	args: { rel: 'stylesheet', href: 'data:text/css,' },
	controls: {
		href: { type: 'text' },
		crossorigin: { type: 'select', options: ['anonymous', 'use-credentials'] },
		rel: { type: 'text' },
		as: { type: 'text' },
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
		color: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlLink>;
