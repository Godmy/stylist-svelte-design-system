import HtmlOutput from './index.svelte';
import type { RecipeHtmlOutput } from '../../../interface/recipe/output';
import type { ContractStory } from '../../../interface/contract/story';

/** `<output>`: Calculated output value. */
export default {
	component: HtmlOutput,
	args: { name: 'result' },
	controls: {
		for: { type: 'text' },
		name: { type: 'text' }
	},
	content: [{ kind: 'text', value: '42' }]
} satisfies ContractStory<RecipeHtmlOutput>;
