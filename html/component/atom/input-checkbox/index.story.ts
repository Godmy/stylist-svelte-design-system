import HtmlInputCheckbox from './index.svelte';
import type { RecipeHtmlInputCheckbox } from '../../../interface/recipe/input-checkbox';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="checkbox">`: Form control. */
export default {
	component: HtmlInputCheckbox,
	args: { checked: true },
	controls: {
		checked: { type: 'boolean' },
		value: { type: 'text' },
		required: { type: 'boolean' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputCheckbox>;
