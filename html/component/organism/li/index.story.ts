import HtmlLi from '$stylist/html/component/organism/li/index.svelte';
import type { RecipeHtmlLi } from '$stylist/html/interface/recipe/li';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<li>`: List item. */
export default {
	component: HtmlLi,
	controls: {
		value: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [{ kind: 'text', value: 'List item' }],
	context: { kind: 'element', tag: 'ul', children: [{ kind: 'outlet' }] }
} satisfies ContractStory<RecipeHtmlLi>;
