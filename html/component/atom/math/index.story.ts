import HtmlMath from './index.svelte';
import type { RecipeHtmlMath } from '../../../interface/recipe/math';
import type { ContractStory } from '../../../interface/contract/story';

/** `<math>`: MathML root. MathML children are not HtmlNode tags, so index.story.svelte draws them. */
export default {
	component: HtmlMath,
	args: { dir: 'ltr' },
	controls: {
		dir: { type: 'select', options: ['ltr', 'rtl'] }
	}
} satisfies ContractStory<RecipeHtmlMath>;
