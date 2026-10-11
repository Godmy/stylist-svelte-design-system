import HtmlNoscript from './index.svelte';
import type { RecipeHtmlNoscript } from '../../../interface/recipe/noscript';
import type { ContractStory } from '../../../interface/contract/story';

/** `<noscript>`: Fallback content for script. */
export default {
	component: HtmlNoscript,
	content: [
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'Shown only when scripting is disabled.' }]
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
} satisfies ContractStory<RecipeHtmlNoscript>;
