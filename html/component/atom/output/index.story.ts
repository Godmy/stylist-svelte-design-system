import HtmlOutput from '$stylist/html/component/atom/output/index.svelte';
import type { RecipeHtmlOutput } from '$stylist/html/interface/recipe/output';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<output>`: Calculated output value. */
export default {
	component: HtmlOutput,
	args: { name: 'result' },
	controls: {
		for: { type: 'text' },
		name: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: '42' }]
} satisfies ContractStory<RecipeHtmlOutput>;
