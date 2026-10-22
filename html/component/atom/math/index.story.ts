import HtmlMath from '$stylist/html/component/atom/math/index.svelte';
import type { RecipeHtmlMath } from '$stylist/html/interface/recipe/math';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<math>`: MathML root. MathML children are not HtmlNode tags, so index.story.svelte draws them. */
export default {
	component: HtmlMath,
	args: { dir: 'ltr' },
	controls: {
		dir: { type: 'select', options: ['ltr', 'rtl'] },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlMath>;
