import HtmlInputButton from '$stylist/html/component/atom/input-button/index.svelte';
import type { RecipeHtmlInputButton } from '$stylist/html/interface/recipe/input-button';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
