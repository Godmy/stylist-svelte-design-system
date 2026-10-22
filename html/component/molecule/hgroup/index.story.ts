import HtmlHgroup from '$stylist/html/component/molecule/hgroup/index.svelte';
import type { RecipeHtmlHgroup } from '$stylist/html/interface/recipe/hgroup';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<hgroup>`: Heading container. */
export default {
	component: HtmlHgroup,
	content: [
		{ kind: 'element', tag: 'h2', children: [{ kind: 'text', value: 'Product name' }] },
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'A short tagline under the heading' }]
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
} satisfies ContractStory<RecipeHtmlHgroup>;
