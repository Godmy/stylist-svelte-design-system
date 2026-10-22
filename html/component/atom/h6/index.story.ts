import HtmlH6 from '$stylist/html/component/atom/h6/index.svelte';
import type { RecipeHtmlH6 } from '$stylist/html/interface/recipe/h6';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<h6>`: Heading. */
export default {
	component: HtmlH6,
	content: [{ kind: 'text', value: 'Heading level 6' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlH6>;
