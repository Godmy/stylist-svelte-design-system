import HtmlSup from '$stylist/html/component/atom/sup/index.svelte';
import type { RecipeHtmlSup } from '$stylist/html/interface/recipe/sup';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<sup>`: Superscript. */
export default {
	component: HtmlSup,
	content: [{ kind: 'text', value: '2' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlSup>;
