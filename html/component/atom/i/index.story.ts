import HtmlI from '$stylist/html/component/atom/i/index.svelte';
import type { RecipeHtmlI } from '$stylist/html/interface/recipe/i';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<i>`: Alternate voice. */
export default {
	component: HtmlI,
	content: [{ kind: 'text', value: 'Idiomatic phrase' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlI>;
