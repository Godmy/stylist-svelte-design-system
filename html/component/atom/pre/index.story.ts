import HtmlPre from '$stylist/html/component/atom/pre/index.svelte';
import type { RecipeHtmlPre } from '$stylist/html/interface/recipe/pre';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
