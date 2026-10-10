import HtmlSlot from './index.svelte';
import type { RecipeHtmlSlot } from '../../../interface/recipe/slot';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<slot>`: Shadow tree slot. */
export default {
	component: HtmlSlot,
	controls: {
		name: { type: 'text' }
	},
	content: [
		{ kind: 'element', tag: 'span', children: [{ kind: 'text', value: 'Slot fallback content' }] }
	]
} satisfies ContractStory<RecipeHtmlSlot>;
