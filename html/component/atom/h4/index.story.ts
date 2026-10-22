import HtmlH4 from '$stylist/html/component/atom/h4/index.svelte';
import type { RecipeHtmlH4 } from '$stylist/html/interface/recipe/h4';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<h4>`: Heading. */
export default {
	component: HtmlH4,
	content: [{ kind: 'text', value: 'Heading level 4' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlH4>;
