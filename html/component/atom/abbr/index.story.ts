import HtmlAbbr from './index.svelte';
import type { RecipeHtmlAbbr } from '../../../interface/recipe/abbr';
import type { ContractStory } from '../../../interface/contract/story';

/** `<abbr>`: Abbreviation. */
export default {
	component: HtmlAbbr,
	args: { title: 'HyperText Markup Language' },
	content: [{ kind: 'text', value: 'HTML' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlAbbr>;
