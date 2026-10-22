import HtmlRt from '$stylist/html/component/atom/rt/index.svelte';
import type { RecipeHtmlRt } from '$stylist/html/interface/recipe/rt';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<rt>`: Ruby annotation text. */
export default {
	component: HtmlRt,
	content: [{ kind: 'text', value: 'kan' }],
	context: {
		kind: 'element',
		tag: 'ruby',
		children: [{ kind: 'text', value: '漢' }, { kind: 'outlet' }]
	},
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlRt>;
