import HtmlInputRadio from './index.svelte';
import type { RecipeHtmlInputRadio } from '../../../interface/recipe/input-radio';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="radio">`: Form control. */
export default {
	component: HtmlInputRadio,
	args: { checked: true, name: 'story-radio' },
	controls: {
		checked: { type: 'boolean' },
		value: { type: 'text' },
		required: { type: 'boolean' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputRadio>;
