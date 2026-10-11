import HtmlInputButton from './index.svelte';
import type { RecipeHtmlInputButton } from '../../../interface/recipe/input-button';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="button">`: Form control. */
export default {
	component: HtmlInputButton,
	args: { value: 'Input button' },
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
} satisfies ContractStory<RecipeHtmlInputButton>;
