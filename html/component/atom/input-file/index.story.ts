import HtmlInputFile from '$stylist/html/component/atom/input-file/index.svelte';
import type { RecipeHtmlInputFile } from '$stylist/html/interface/recipe/input-file';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
