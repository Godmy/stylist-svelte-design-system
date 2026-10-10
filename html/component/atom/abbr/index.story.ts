import HtmlAbbr from './index.svelte';
import type { RecipeHtmlAbbr } from '../../../interface/recipe/abbr';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<abbr>`: Abbreviation. */
export default {
	component: HtmlAbbr,
	args: { title: 'HyperText Markup Language' },
	content: [{ kind: 'text', value: 'HTML' }]
} satisfies ContractStory<RecipeHtmlAbbr>;
