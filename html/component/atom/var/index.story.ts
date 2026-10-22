import HtmlVar from '$stylist/html/component/atom/var/index.svelte';
import type { RecipeHtmlVar } from '$stylist/html/interface/recipe/var';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<var>`: Variable. */
export default {
	component: HtmlVar,
	content: [{ kind: 'text', value: 'x' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlVar>;
