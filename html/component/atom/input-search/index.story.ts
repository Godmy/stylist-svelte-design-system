import HtmlInputSearch from './index.svelte';
import type { RecipeHtmlInputSearch } from '../../../interface/recipe/input-search';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="search">`: Form control. */
export default {
	component: HtmlInputSearch,
	args: { placeholder: 'Search…' },
	controls: {
		value: { type: 'text' },
		placeholder: { type: 'text' },
		maxlength: { type: 'number' },
		minlength: { type: 'number' },
		pattern: { type: 'text' },
		size: { type: 'number' },
		readonly: { type: 'boolean' },
		required: { type: 'boolean' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true }, Required: { required: true } }
} satisfies ContractStory<RecipeHtmlInputSearch>;
