import HtmlFigcaption from './index.svelte';
import type { RecipeHtmlFigcaption } from '../../../interface/recipe/figcaption';
import type { ContractStory } from '../../../interface/contract/story';

/** `<figcaption>`: Caption for figure. */
export default {
	component: HtmlFigcaption,
	content: [{ kind: 'text', value: 'Figure 1. A placeholder landscape.' }],
	context: {
		kind: 'element',
		tag: 'figure',
		children: [
			{
				kind: 'element',
				tag: 'img',
				attrs: {
					src: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27240%27 height=%27140%27%3E%3Crect width=%27120%27 height=%27140%27 fill=%27%236366f1%27/%3E%3Crect x=%27120%27 width=%27120%27 height=%27140%27 fill=%27%2394a3b8%27/%3E%3C/svg%3E',
					alt: 'Placeholder',
					width: 240,
					height: 140
				}
			},
			{ kind: 'outlet' }
		]
	},
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlFigcaption>;
