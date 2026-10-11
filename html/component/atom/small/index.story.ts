import HtmlSmall from './index.svelte';
import type { RecipeHtmlSmall } from '../../../interface/recipe/small';
import type { ContractStory } from '../../../interface/contract/story';

/** `<small>`: Side comment. */
export default {
	component: HtmlSmall,
	content: [{ kind: 'text', value: 'Fine print' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlSmall>;
