import HtmlMeter from './index.svelte';
import type { RecipeHtmlMeter } from '../../../interface/recipe/meter';
import type { ContractStory } from '../../../interface/contract/story';

/** `<meter>`: Gauge. */
export default {
	component: HtmlMeter,
	args: { value: 0.6, min: 0, max: 1, low: 0.3, high: 0.8, optimum: 1 },
	controls: {
		value: { type: 'range', min: 0, max: 1, step: 0.05 },
		min: { type: 'number' },
		max: { type: 'number' },
		low: { type: 'number' },
		high: { type: 'number' },
		optimum: { type: 'number' }
	},
	content: [{ kind: 'text', value: 'Gauge' }]
} satisfies ContractStory<RecipeHtmlMeter>;
