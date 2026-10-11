import HtmlInputColor from './index.svelte';
import type { RecipeHtmlInputColor } from '../../../interface/recipe/input-color';
import type { ContractStory } from '../../../interface/contract/story';

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
