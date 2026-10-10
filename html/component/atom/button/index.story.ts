import HtmlButton from './index.svelte';
import type { RecipeHtmlButton } from '../../../interface/recipe/button';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<button>`: Button control. */
export default {
	component: HtmlButton,
	args: { type: 'button' },
	controls: {
		disabled: { type: 'boolean' },
		name: { type: 'text' },
		type: { type: 'select', options: ['button', 'submit', 'reset'] },
		value: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } },
	content: [{ kind: 'text', value: 'Save changes' }]
} satisfies ContractStory<RecipeHtmlButton>;
