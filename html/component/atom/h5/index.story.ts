import HtmlH5 from '$stylist/html/component/atom/h5/index.svelte';
import type { RecipeHtmlH5 } from '$stylist/html/interface/recipe/h5';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<h5>`: Heading. */
export default {
	component: HtmlH5,
	content: [{ kind: 'text', value: 'Heading level 5' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlH5>;
