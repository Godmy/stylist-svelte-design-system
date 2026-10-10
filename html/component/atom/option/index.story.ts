import HtmlOption from './index.svelte';
import type { RecipeHtmlOption } from '../../../interface/recipe/option';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<option>`: Option in a list box or combo box control. */
export default {
	component: HtmlOption,
	controls: {
		disabled: { type: 'boolean' },
		label: { type: 'text' },
		selected: { type: 'boolean' },
		value: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } },
	content: [{ kind: 'text', value: 'Option' }]
} satisfies ContractStory<RecipeHtmlOption>;
