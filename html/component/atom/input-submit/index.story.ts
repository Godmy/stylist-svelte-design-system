import HtmlInputSubmit from './index.svelte';
import type { RecipeHtmlInputSubmit } from '../../../interface/recipe/input-submit';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="submit">`: Form control. */
export default {
	component: HtmlInputSubmit,
	args: { value: 'Submit' },
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
} satisfies ContractStory<RecipeHtmlInputSubmit>;
