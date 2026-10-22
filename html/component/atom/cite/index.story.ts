import HtmlCite from '$stylist/html/component/atom/cite/index.svelte';
import type { RecipeHtmlCite } from '$stylist/html/interface/recipe/cite';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
