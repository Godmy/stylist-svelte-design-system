import HtmlDatalist from '$stylist/html/component/molecule/datalist/index.svelte';
import type { RecipeHtmlDatalist } from '$stylist/html/interface/recipe/datalist';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<datalist>`: Container for options for combo box control. */
export default {
	component: HtmlDatalist,
	content: [
		{ kind: 'element', tag: 'option', attrs: { value: 'Chrome' } },
		{ kind: 'element', tag: 'option', attrs: { value: 'Firefox' } },
		{ kind: 'element', tag: 'option', attrs: { value: 'Safari' } }
	],
	args: { id: 'browsers' },
	context: {
		kind: 'element',
		tag: 'p',
		children: [
			{
				kind: 'element',
				tag: 'label',
				children: [
					{ kind: 'text', value: 'Browser ' },
					{ kind: 'element', tag: 'input', attrs: { list: 'browsers', name: 'browser' } }
				]
			},
			{ kind: 'outlet' }
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
} satisfies ContractStory<RecipeHtmlDatalist>;
