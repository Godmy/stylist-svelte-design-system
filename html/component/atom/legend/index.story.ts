import HtmlLegend from '$stylist/html/component/atom/legend/index.svelte';
import type { RecipeHtmlLegend } from '$stylist/html/interface/recipe/legend';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<legend>`: Caption for fieldset. */
export default {
	component: HtmlLegend,
	content: [{ kind: 'text', value: 'Shipping address' }],
	context: {
		kind: 'element',
		tag: 'fieldset',
		children: [
			{ kind: 'outlet' },
			{
				kind: 'element',
				tag: 'label',
				children: [
					{ kind: 'text', value: 'City ' },
					{ kind: 'element', tag: 'input', attrs: { name: 'city' } }
				]
			}
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
} satisfies ContractStory<RecipeHtmlLegend>;
