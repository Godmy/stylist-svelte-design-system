import HtmlCite from './index.svelte';
import type { RecipeHtmlCite } from '../../../interface/recipe/cite';
import type { ContractStory } from '../../../interface/contract/story';

/** `<cite>`: Title of a work. */
export default {
	component: HtmlCite,
	content: [{ kind: 'text', value: 'The Hobbit' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlCite>;
