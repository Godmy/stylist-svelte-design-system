import HtmlData from './index.svelte';
import type { RecipeHtmlData } from '../../../interface/recipe/data';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<data>`: Machine-readable equivalent. */
export default {
	component: HtmlData,
	args: { value: '398' },
	controls: {
		value: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'Tomato' }]
} satisfies ContractStory<RecipeHtmlData>;
