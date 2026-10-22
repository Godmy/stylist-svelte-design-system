import HtmlSub from '$stylist/html/component/atom/sub/index.svelte';
import type { RecipeHtmlSub } from '$stylist/html/interface/recipe/sub';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<sub>`: Subscript. */
export default {
	component: HtmlSub,
	content: [{ kind: 'text', value: '2' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlSub>;
