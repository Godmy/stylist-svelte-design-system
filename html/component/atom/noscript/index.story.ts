import HtmlNoscript from './index.svelte';
import type { RecipeHtmlNoscript } from '../../../interface/recipe/noscript';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<noscript>`: Fallback content for script. */
export default {
	component: HtmlNoscript,
	content: [
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'Shown only when scripting is disabled.' }]
		}
	]
} satisfies ContractStory<RecipeHtmlNoscript>;
