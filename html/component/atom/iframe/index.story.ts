import HtmlIframe from '$stylist/html/component/atom/iframe/index.svelte';
import type { RecipeHtmlIframe } from '$stylist/html/interface/recipe/iframe';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<iframe>`: Child navigable. */
export default {
	component: HtmlIframe,
	args: {
		srcdoc: '<p style="font-family: sans-serif">Framed document</p>',
		title: 'Framed document',
		width: 320,
		height: 160
	},
	controls: {
		src: { type: 'text' },
		srcdoc: { type: 'text' },
		name: { type: 'text' },
		sandbox: {
			type: 'select',
			options: ['allow-scripts', 'allow-forms', 'allow-same-origin', 'allow-popups']
		},
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
		loading: { type: 'select', options: ['eager', 'lazy'] },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlIframe>;
