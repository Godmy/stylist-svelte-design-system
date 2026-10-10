import HtmlPre from './index.svelte';
import type { RecipeHtmlPre } from '../../../interface/recipe/pre';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<pre>`: Block of preformatted text. */
export default {
	component: HtmlPre,
	content: [{ kind: 'text', value: '  preformatted\n    text keeps\n      its spacing' }]
} satisfies ContractStory<RecipeHtmlPre>;
