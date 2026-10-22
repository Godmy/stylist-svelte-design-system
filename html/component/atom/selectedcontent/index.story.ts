import HtmlSelectedcontent from '$stylist/html/component/atom/selectedcontent/index.svelte';
import type { RecipeHtmlSelectedcontent } from '$stylist/html/interface/recipe/selectedcontent';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
