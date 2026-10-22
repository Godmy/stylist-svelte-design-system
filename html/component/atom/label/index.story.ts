import HtmlLabel from '$stylist/html/component/atom/label/index.svelte';
import type { RecipeHtmlLabel } from '$stylist/html/interface/recipe/label';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<label>`: Caption for a form control. */
export default {
	component: HtmlLabel,
	controls: {
		for: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [
		{ kind: 'text', value: 'Email address ' },
		{ kind: 'element', tag: 'input', attrs: { type: 'email', name: 'email' } }
	]
} satisfies ContractStory<RecipeHtmlLabel>;
