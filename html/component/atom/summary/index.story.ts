import HtmlSummary from './index.svelte';
import type { RecipeHtmlSummary } from '../../../interface/recipe/summary';
import type { ContractStory } from '../../../interface/contract/story';

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
