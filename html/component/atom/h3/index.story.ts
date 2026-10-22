import HtmlH3 from '$stylist/html/component/atom/h3/index.svelte';
import type { RecipeHtmlH3 } from '$stylist/html/interface/recipe/h3';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<h3>`: Heading. */
export default {
	component: HtmlH3,
	content: [{ kind: 'text', value: 'Heading level 3' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlH3>;
