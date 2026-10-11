import HtmlDiv from './index.svelte';
import type { RecipeHtmlDiv } from '../../../interface/recipe/div';
import type { ContractStory } from '../../../interface/contract/story';

/** `<div>`: Generic flow container, or container for name-value groups in dl elements. */
export default {
	component: HtmlDiv,
	content: [
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'A generic flow container without semantics.' }]
		}
	],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlDiv>;
