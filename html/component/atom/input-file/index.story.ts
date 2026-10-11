import HtmlInputFile from './index.svelte';
import type { RecipeHtmlInputFile } from '../../../interface/recipe/input-file';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="file">`: Form control. */
export default {
	component: HtmlInputFile,
	controls: {
		accept: { type: 'text' },
		multiple: { type: 'boolean' },
		required: { type: 'boolean' },
		disabled: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } }
} satisfies ContractStory<RecipeHtmlInputFile>;
