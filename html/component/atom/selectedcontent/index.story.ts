import HtmlSelectedcontent from './index.svelte';
import type { RecipeHtmlSelectedcontent } from '../../../interface/recipe/selectedcontent';
import type { ContractStory } from '../../../interface/contract/story';

/** `<selectedcontent>`: Mirrors content from an option. */
export default {
	component: HtmlSelectedcontent,
	context: {
		kind: 'element',
		tag: 'select',
		children: [
			{ kind: 'element', tag: 'button', children: [{ kind: 'outlet' }] },
			{ kind: 'element', tag: 'option', children: [{ kind: 'text', value: 'Apple' }] },
			{ kind: 'element', tag: 'option', children: [{ kind: 'text', value: 'Pear' }] }
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
} satisfies ContractStory<RecipeHtmlSelectedcontent>;
