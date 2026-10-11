import HtmlRuby from './index.svelte';
import type { RecipeHtmlRuby } from '../../../interface/recipe/ruby';
import type { ContractStory } from '../../../interface/contract/story';

/** `<ruby>`: Ruby annotation(s). */
export default {
	component: HtmlRuby,
	content: [
		{ kind: 'text', value: '漢' },
		{ kind: 'element', tag: 'rp', children: [{ kind: 'text', value: '(' }] },
		{ kind: 'element', tag: 'rt', children: [{ kind: 'text', value: 'kan' }] },
		{ kind: 'element', tag: 'rp', children: [{ kind: 'text', value: ')' }] },
		{ kind: 'text', value: '字' },
		{ kind: 'element', tag: 'rp', children: [{ kind: 'text', value: '(' }] },
		{ kind: 'element', tag: 'rt', children: [{ kind: 'text', value: 'ji' }] },
		{ kind: 'element', tag: 'rp', children: [{ kind: 'text', value: ')' }] }
	],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlRuby>;
