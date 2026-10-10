import HtmlCite from './index.svelte';
import type { RecipeHtmlCite } from '../../../interface/recipe/cite';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<cite>`: Title of a work. */
export default {
	component: HtmlCite,
	content: [{ kind: 'text', value: 'The Hobbit' }]
} satisfies ContractStory<RecipeHtmlCite>;
