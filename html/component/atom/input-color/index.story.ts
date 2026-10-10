import HtmlInputColor from './index.svelte';
import type { RecipeHtmlInputColor } from '../../../interface/recipe/input-color';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<input type="color">`: Form control. */
export default {
	component: HtmlInputColor,
	args: { value: '#6366f1' },
	controls: {
		value: { type: 'color' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputColor>;
