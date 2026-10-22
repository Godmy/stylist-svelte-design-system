import HtmlTime from '$stylist/html/component/atom/time/index.svelte';
import type { RecipeHtmlTime } from '$stylist/html/interface/recipe/time';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<time>`: Machine-readable equivalent of date- or time-related data. */
export default {
	component: HtmlTime,
	args: { datetime: '2026-10-10' },
	controls: {
		datetime: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: '10 October 2026' }]
} satisfies ContractStory<RecipeHtmlTime>;
