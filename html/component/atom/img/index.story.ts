import HtmlImg from '$stylist/html/component/atom/img/index.svelte';
import type { RecipeHtmlImg } from '$stylist/html/interface/recipe/img';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<img>`: Image. */
export default {
	component: HtmlImg,
	args: {
		src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='140'%3E%3Crect width='240' height='140' fill='%2394a3b8'/%3E%3Ccircle cx='70' cy='60' r='22' fill='%23e2e8f0'/%3E%3Cpath d='M0 140 90 70l50 40 40-30 60 60z' fill='%23475569'/%3E%3C/svg%3E",
		alt: 'Placeholder landscape',
		width: 240,
		height: 140
	},
	controls: {
		alt: { type: 'text' },
		src: { type: 'text' },
		crossorigin: { type: 'select', options: ['anonymous', 'use-credentials'] },
		width: { type: 'number' },
		height: { type: 'number' },
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
		decoding: { type: 'select', options: ['sync', 'async', 'auto'] },
		loading: { type: 'select', options: ['eager', 'lazy'] },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlImg>;
