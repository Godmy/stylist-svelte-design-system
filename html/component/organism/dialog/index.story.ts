import HtmlDialog from '$stylist/html/component/organism/dialog/index.svelte';
import type { RecipeHtmlDialog } from '$stylist/html/interface/recipe/dialog';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<dialog>`: Dialog box or window. */
export default {
	component: HtmlDialog,
	args: { open: true },
	controls: {
		open: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
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
