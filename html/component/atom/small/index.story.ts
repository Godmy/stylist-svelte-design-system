import HtmlSmall from '$stylist/html/component/atom/small/index.svelte';
import type { RecipeHtmlSmall } from '$stylist/html/interface/recipe/small';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<small>`: Side comment. */
export default {
	component: HtmlSmall,
	content: [{ kind: 'text', value: 'Fine print' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlSmall>;
