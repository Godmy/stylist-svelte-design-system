import HtmlProgress from '$stylist/html/component/atom/progress/index.svelte';
import type { RecipeHtmlProgress } from '$stylist/html/interface/recipe/progress';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<progress>`: Progress bar. */
export default {
	component: HtmlProgress,
	args: { value: 40, max: 100 },
	controls: {
		value: { type: 'range', min: 0, max: 100, step: 1 },
		max: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: '40%' }]
} satisfies ContractStory<RecipeHtmlProgress>;
