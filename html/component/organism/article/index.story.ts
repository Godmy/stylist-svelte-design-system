import HtmlArticle from '$stylist/html/component/organism/article/index.svelte';
import type { RecipeHtmlArticle } from '$stylist/html/interface/recipe/article';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<article>`: Self-contained syndicatable or reusable composition. */
export default {
	component: HtmlArticle,
	content: [
		{ kind: 'element', tag: 'h2', children: [{ kind: 'text', value: 'Article title' }] },
		{
			kind: 'element',
			tag: 'p',
			children: [
				{
					kind: 'text',
					value: 'An article is a self-contained composition, like a post or a card.'
				}
			]
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
} satisfies ContractStory<RecipeHtmlArticle>;
