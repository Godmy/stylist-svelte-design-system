import HtmlH1 from '$stylist/html/component/atom/h1/index.svelte';
import type { RecipeHtmlH1 } from '$stylist/html/interface/recipe/h1';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<h1>`: Heading. */
export default {
	component: HtmlH1,
	content: [{ kind: 'text', value: 'Hello world!!!' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlH1>;
