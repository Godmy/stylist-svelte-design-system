import HtmlSelect from '$stylist/html/component/molecule/select/index.svelte';
import type { RecipeHtmlSelect } from '$stylist/html/interface/recipe/select';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<select>`: List box control. */
export default {
	component: HtmlSelect,
	controls: {
		autocomplete: { type: 'select', options: ['on', 'off'] },
		disabled: { type: 'boolean' },
		multiple: { type: 'boolean' },
		name: { type: 'text' },
		required: { type: 'boolean' },
		size: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } },
	content: [
		{
			kind: 'element',
			tag: 'option',
			attrs: { value: 'apple' },
			children: [{ kind: 'text', value: 'Apple' }]
		},
		{
			kind: 'element',
			tag: 'option',
			attrs: { value: 'pear' },
			children: [{ kind: 'text', value: 'Pear' }]
		},
		{
			kind: 'element',
			tag: 'option',
			attrs: { value: 'plum' },
			children: [{ kind: 'text', value: 'Plum' }]
		}
	]
} satisfies ContractStory<RecipeHtmlSelect>;
