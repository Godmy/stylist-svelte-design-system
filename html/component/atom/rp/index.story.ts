import HtmlRp from '$stylist/html/component/atom/rp/index.svelte';
import type { RecipeHtmlRp } from '$stylist/html/interface/recipe/rp';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<rp>`: Parenthesis for ruby annotation text. */
export default {
	component: HtmlRp,
	context: {
		kind: 'element',
		tag: 'ruby',
		children: [
			{ kind: 'text', value: '漢' },
			{ kind: 'outlet' },
			{ kind: 'element', tag: 'rt', children: [{ kind: 'text', value: 'kan' }] },
			{ kind: 'element', tag: 'rp', children: [{ kind: 'text', value: ')' }] }
		]
	},
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlRp>;
