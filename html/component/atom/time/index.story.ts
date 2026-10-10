import HtmlTime from './index.svelte';
import type { RecipeHtmlTime } from '../../../interface/recipe/time';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<time>`: Machine-readable equivalent of date- or time-related data. */
export default {
	component: HtmlTime,
	args: { datetime: '2026-10-10' },
	controls: {
		datetime: { type: 'text' }
	},
	content: [{ kind: 'text', value: '10 October 2026' }]
} satisfies ContractStory<RecipeHtmlTime>;
