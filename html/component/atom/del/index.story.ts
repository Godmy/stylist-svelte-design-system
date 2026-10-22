import HtmlDel from '$stylist/html/component/atom/del/index.svelte';
import type { RecipeHtmlDel } from '$stylist/html/interface/recipe/del';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<del>`: A removal from the document. */
export default {
	component: HtmlDel,
	args: { datetime: '2026-10-10' },
	controls: {
		cite: { type: 'text' },
		datetime: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Removed text' }]
} satisfies ContractStory<RecipeHtmlDel>;
