import HtmlWbr from './index.svelte';
import type { RecipeHtmlWbr } from '../../../interface/recipe/wbr';
import type { ContractStory } from '../../../interface/contract/story';

/** `<wbr>`: Line breaking opportunity. */
export default {
	component: HtmlWbr,
	context: {
		kind: 'element',
		tag: 'p',
		attrs: { style: 'max-width: 12rem' },
		children: [
			{ kind: 'text', value: 'Pneumonoultra' },
			{ kind: 'outlet' },
			{ kind: 'text', value: 'microscopicsilicovolcanoconiosis' }
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
} satisfies ContractStory<RecipeHtmlWbr>;
