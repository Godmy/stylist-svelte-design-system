import HtmlBdi from '$stylist/html/component/atom/bdi/index.svelte';
import type { RecipeHtmlBdi } from '$stylist/html/interface/recipe/bdi';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<bdi>`: Text directionality isolation. */
export default {
	component: HtmlBdi,
	content: [{ kind: 'text', value: 'إيان' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlBdi>;
