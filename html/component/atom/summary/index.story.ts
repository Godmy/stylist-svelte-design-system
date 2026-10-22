import HtmlSummary from '$stylist/html/component/atom/summary/index.svelte';
import type { RecipeHtmlSummary } from '$stylist/html/interface/recipe/summary';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<summary>`: Caption for details. */
export default {
	component: HtmlSummary,
	content: [{ kind: 'text', value: 'More details' }],
	context: {
		kind: 'element',
		tag: 'details',
		attrs: { open: true },
		children: [
			{ kind: 'outlet' },
			{
				kind: 'element',
				tag: 'p',
				children: [{ kind: 'text', value: 'Hidden content revealed when the details are open.' }]
			}
		]
	},
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlSummary>;
