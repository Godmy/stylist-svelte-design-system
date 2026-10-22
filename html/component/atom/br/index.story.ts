import HtmlBr from '$stylist/html/component/atom/br/index.svelte';
import type { RecipeHtmlBr } from '$stylist/html/interface/recipe/br';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<br>`: Line break, e.g. in poem or postal address. */
export default {
	component: HtmlBr,
	context: {
		kind: 'element',
		tag: 'p',
		children: [
			{ kind: 'text', value: 'First line' },
			{ kind: 'outlet' },
			{ kind: 'text', value: 'Second line' }
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
} satisfies ContractStory<RecipeHtmlBr>;
