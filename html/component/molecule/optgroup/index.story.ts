import HtmlOptgroup from './index.svelte';
import type { RecipeHtmlOptgroup } from '../../../interface/recipe/optgroup';
import type { ContractStory } from '../../../interface/contract/story';

/** `<optgroup>`: Group of options in a list box. */
export default {
	component: HtmlOptgroup,
	controls: {
		disabled: { type: 'boolean' },
		label: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } },
	content: [
		{ kind: 'element', tag: 'legend', children: [{ kind: 'text', value: 'Fruits' }] },
		{ kind: 'element', tag: 'option', children: [{ kind: 'text', value: 'Apple' }] },
		{ kind: 'element', tag: 'option', children: [{ kind: 'text', value: 'Pear' }] }
	]
} satisfies ContractStory<RecipeHtmlOptgroup>;
