import HtmlInputImage from './index.svelte';
import type { RecipeHtmlInputImage } from '../../../interface/recipe/input-image';
import type { ContractStory } from '../../../interface/contract/story';

/** `<input type="image">`: Form control. */
export default {
	component: HtmlInputImage,
	args: {
		src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='140'%3E%3Crect width='240' height='140' fill='%2394a3b8'/%3E%3Ccircle cx='70' cy='60' r='22' fill='%23e2e8f0'/%3E%3Cpath d='M0 140 90 70l50 40 40-30 60 60z' fill='%23475569'/%3E%3C/svg%3E",
		alt: 'Submit',
		width: 120,
		height: 70
	},
	controls: {
		src: { type: 'text' },
		alt: { type: 'text' },
		width: { type: 'number' },
		height: { type: 'number' },
		disabled: { type: 'boolean' }
	},
	presets: { Disabled: { disabled: true } }
} satisfies ContractStory<RecipeHtmlInputImage>;
