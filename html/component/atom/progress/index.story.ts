import HtmlProgress from './index.svelte';
import type { RecipeHtmlProgress } from '../../../interface/recipe/progress';
import type { ContractStory } from '../../../interface/contract/story';

/** `<progress>`: Progress bar. */
export default {
	component: HtmlProgress,
	args: { value: 40, max: 100 },
	controls: {
		value: { type: 'range', min: 0, max: 100, step: 1 },
		max: { type: 'number' }
	},
	content: [{ kind: 'text', value: 'Progress bar' }]
} satisfies ContractStory<RecipeHtmlProgress>;
