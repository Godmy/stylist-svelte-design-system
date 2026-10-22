import HtmlMeter from '$stylist/html/component/atom/meter/index.svelte';
import type { RecipeHtmlMeter } from '$stylist/html/interface/recipe/meter';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
		optimum: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: '60%' }]
} satisfies ContractStory<RecipeHtmlMeter>;
