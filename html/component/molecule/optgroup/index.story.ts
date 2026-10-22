import HtmlOptgroup from '$stylist/html/component/molecule/optgroup/index.svelte';
import type { RecipeHtmlOptgroup } from '$stylist/html/interface/recipe/optgroup';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<optgroup>`: Group of options in a list box. */
export default {
	component: HtmlOptgroup,
	controls: {
		disabled: { type: 'boolean' },
		label: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } },
	content: [
		{ kind: 'element', tag: 'legend', children: [{ kind: 'text', value: 'Fruits' }] },
		{ kind: 'element', tag: 'option', children: [{ kind: 'text', value: 'Apple' }] },
		{ kind: 'element', tag: 'option', children: [{ kind: 'text', value: 'Pear' }] }
	],
	context: { kind: 'element', tag: 'select', children: [{ kind: 'outlet' }] }
} satisfies ContractStory<RecipeHtmlOptgroup>;
