import HtmlStyle from './index.svelte';
import type { RecipeHtmlStyle } from '../../../interface/recipe/style';
import type { ContractStory } from '../../../interface/contract/story';

/** `<style>`: Embedded styling information. */
export default {
	component: HtmlStyle,
	args: { text: '.html-story-style { color: rebeccapurple; }' },
	controls: {
		text: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlStyle>;
