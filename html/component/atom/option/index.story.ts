import HtmlOption from './index.svelte';
import type { RecipeHtmlOption } from '../../../interface/recipe/option';
import type { ContractStory } from '../../../interface/contract/story';

/** `<option>`: Option in a list box or combo box control. */
export default {
	component: HtmlOption,
	controls: {
		disabled: { type: 'boolean' },
		label: { type: 'text' },
		selected: { type: 'boolean' },
		value: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } },
	content: [{ kind: 'text', value: 'Option' }],
	context: { kind: 'element', tag: 'select', children: [{ kind: 'outlet' }] }
} satisfies ContractStory<RecipeHtmlOption>;
