import HtmlAside from '$stylist/html/component/organism/aside/index.svelte';
import type { RecipeHtmlAside } from '$stylist/html/interface/recipe/aside';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<aside>`: Sidebar for tangentially related content. */
export default {
	component: HtmlAside,
	content: [
		{ kind: 'element', tag: 'h2', children: [{ kind: 'text', value: 'Related' }] },
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'Content tangential to the main text: notes, links, ads.' }]
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
} satisfies ContractStory<RecipeHtmlAside>;
