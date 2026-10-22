import HtmlKbd from '$stylist/html/component/atom/kbd/index.svelte';
import type { RecipeHtmlKbd } from '$stylist/html/interface/recipe/kbd';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<kbd>`: User input. */
export default {
	component: HtmlKbd,
	content: [{ kind: 'text', value: 'Ctrl + S' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlKbd>;
