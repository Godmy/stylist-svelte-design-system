import HtmlInput from './index.svelte';
import type { RecipeHtmlInput } from '../../../interface/recipe/input';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input>`: Form control. */
export default {
	component: HtmlInput,
	controls: {
		accept: { type: 'text' },
		alt: { type: 'text' },
		autocomplete: { type: 'select', options: ['on', 'off'] },
		checked: { type: 'boolean' },
		disabled: { type: 'boolean' },
		height: { type: 'number' },
		max: { type: 'text' },
		maxlength: { type: 'number' },
		min: { type: 'text' },
		minlength: { type: 'number' },
		multiple: { type: 'boolean' },
		name: { type: 'text' },
		pattern: { type: 'text' },
		placeholder: { type: 'text' },
		readonly: { type: 'boolean' },
		required: { type: 'boolean' },
		size: { type: 'number' },
		src: { type: 'text' },
		step: { type: 'text' },
		type: { type: 'text' },
		value: { type: 'text' },
		width: { type: 'number' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInput>;
