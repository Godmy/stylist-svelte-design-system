import HtmlSlot from './index.svelte';
import type { RecipeHtmlSlot } from '../../../interface/recipe/slot';
import type { ContractStory } from '../../../interface/contract/story';

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
