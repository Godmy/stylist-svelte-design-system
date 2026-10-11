import HtmlFieldset from './index.svelte';
import type { RecipeHtmlFieldset } from '../../../interface/recipe/fieldset';
import type { ContractStory } from '../../../interface/contract/story';

/** `<fieldset>`: Group of form controls. */
export default {
	component: HtmlFieldset,
	controls: {
		disabled: { type: 'boolean' },
		name: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } },
	content: [
		{ kind: 'element', tag: 'legend', children: [{ kind: 'text', value: 'Shipping address' }] },
		{
			kind: 'element',
			tag: 'label',
			children: [
				{ kind: 'text', value: 'City ' },
				{ kind: 'element', tag: 'input', attrs: { name: 'city' } }
			]
		}
	]
} satisfies ContractStory<RecipeHtmlFieldset>;
