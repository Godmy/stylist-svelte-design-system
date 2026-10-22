import HtmlSlot from '$stylist/html/component/atom/slot/index.svelte';
import type { RecipeHtmlSlot } from '$stylist/html/interface/recipe/slot';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<slot>`: Shadow tree slot. */
export default {
	component: HtmlSlot,
	controls: {
		name: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [
		{ kind: 'element', tag: 'span', children: [{ kind: 'text', value: 'Slot fallback content' }] }
	]
} satisfies ContractStory<RecipeHtmlSlot>;
