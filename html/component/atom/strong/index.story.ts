import HtmlStrong from '$stylist/html/component/atom/strong/index.svelte';
import type { RecipeHtmlStrong } from '$stylist/html/interface/recipe/strong';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<strong>`: Importance. */
export default {
	component: HtmlStrong,
	content: [{ kind: 'text', value: 'Important text' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlStrong>;
