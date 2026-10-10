import HtmlStyle from './index.svelte';
import type { RecipeHtmlStyle } from '../../../interface/recipe/style';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<style>`: Embedded styling information. */
export default {
	component: HtmlStyle,
	args: { text: '.html-story-style { color: rebeccapurple; }' },
	controls: {
		text: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlStyle>;
