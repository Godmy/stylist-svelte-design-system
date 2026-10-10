import HtmlDialog from './index.svelte';
import type { RecipeHtmlDialog } from '../../../interface/recipe/dialog';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<dialog>`: Dialog box or window. */
export default {
	component: HtmlDialog,
	args: { open: true },
	controls: {
		open: { type: 'boolean' }
	},
	presets: { Closed: { open: false } },
	content: [
		{ kind: 'element', tag: 'p', children: [{ kind: 'text', value: 'Dialog content.' }] },
		{
			kind: 'element',
			tag: 'form',
			attrs: { method: 'dialog' },
			children: [{ kind: 'element', tag: 'button', children: [{ kind: 'text', value: 'Close' }] }]
		}
	]
} satisfies ContractStory<RecipeHtmlDialog>;
