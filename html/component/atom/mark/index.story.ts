import HtmlMark from '$stylist/html/component/atom/mark/index.svelte';
import type { RecipeHtmlMark } from '$stylist/html/interface/recipe/mark';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<mark>`: Highlight. */
export default {
	component: HtmlMark,
	content: [{ kind: 'text', value: 'Highlighted text' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlMark>;
