import HtmlInputColor from '$stylist/html/component/atom/input-color/index.svelte';
import type { RecipeHtmlInputColor } from '$stylist/html/interface/recipe/input-color';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<input type="color">`: Form control. */
export default {
	component: HtmlInputColor,
	args: { value: '#6366f1' },
	controls: {
		value: { type: 'color' },
		disabled: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputColor>;
