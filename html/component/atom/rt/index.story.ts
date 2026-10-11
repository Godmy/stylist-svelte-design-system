import HtmlRt from './index.svelte';
import type { RecipeHtmlRt } from '../../../interface/recipe/rt';
import type { ContractStory } from '../../../interface/contract/story';

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
