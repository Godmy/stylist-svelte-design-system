import HtmlData from '$stylist/html/component/atom/data/index.svelte';
import type { RecipeHtmlData } from '$stylist/html/interface/recipe/data';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<data>`: Machine-readable equivalent. */
export default {
	component: HtmlData,
	args: { value: '398' },
	controls: {
		value: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Tomato' }]
} satisfies ContractStory<RecipeHtmlData>;
