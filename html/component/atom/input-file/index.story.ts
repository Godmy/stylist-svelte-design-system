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
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } }
} satisfies ContractStory<RecipeHtmlInputFile>;
