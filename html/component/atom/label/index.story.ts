import HtmlLabel from './index.svelte';
import type { RecipeHtmlLabel } from '../../../interface/recipe/label';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<label>`: Caption for a form control. */
export default {
	component: HtmlLabel,
	controls: {
		for: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Email address' }]
} satisfies ContractStory<RecipeHtmlLabel>;
