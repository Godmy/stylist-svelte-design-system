import HtmlPre from './index.svelte';
import type { RecipeHtmlPre } from '../../../interface/recipe/pre';
import type { ContractStory } from '../../../interface/contract/story';

/** `<pre>`: Block of preformatted text. */
export default {
	component: HtmlPre,
	content: [{ kind: 'text', value: '  preformatted\n    text keeps\n      its spacing' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlPre>;
