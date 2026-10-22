import HtmlB from '$stylist/html/component/atom/b/index.svelte';
import type { RecipeHtmlB } from '$stylist/html/interface/recipe/b';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<b>`: Keywords. */
export default {
	component: HtmlB,
	content: [{ kind: 'text', value: 'Bold keyword' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlB>;
