import HtmlInputReset from './index.svelte';
import type { RecipeHtmlInputReset } from '../../../interface/recipe/input-reset';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="reset">`: Form control. */
export default {
	component: HtmlInputReset,
	args: { value: 'Reset' },
	controls: {
		value: { type: 'text' },
		disabled: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputReset>;
