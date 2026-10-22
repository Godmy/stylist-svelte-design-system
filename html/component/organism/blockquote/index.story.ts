import HtmlBlockquote from '$stylist/html/component/organism/blockquote/index.svelte';
import type { RecipeHtmlBlockquote } from '$stylist/html/interface/recipe/blockquote';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<blockquote>`: A section quoted from another source. */
export default {
	component: HtmlBlockquote,
	controls: {
		cite: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'Simplicity is prerequisite for reliability.' }]
		}
	]
} satisfies ContractStory<RecipeHtmlBlockquote>;
