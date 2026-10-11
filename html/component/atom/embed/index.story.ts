import HtmlEmbed from './index.svelte';
import type { RecipeHtmlEmbed } from '../../../interface/recipe/embed';
import type { ContractStory } from '../../../interface/contract/story';

/** `<embed>`: Plugin. */
export default {
	component: HtmlEmbed,
	args: {
		src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='140'%3E%3Crect width='240' height='140' fill='%2394a3b8'/%3E%3Ccircle cx='70' cy='60' r='22' fill='%23e2e8f0'/%3E%3Cpath d='M0 140 90 70l50 40 40-30 60 60z' fill='%23475569'/%3E%3C/svg%3E",
		type: 'image/svg+xml',
		width: 240,
		height: 140
	},
	controls: {
		src: { type: 'text' },
		type: { type: 'text' },
		width: { type: 'number' },
		height: { type: 'number' }
	}
} satisfies ContractStory<RecipeHtmlEmbed>;
