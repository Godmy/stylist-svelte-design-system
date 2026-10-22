import HtmlDetails from '$stylist/html/component/molecule/details/index.svelte';
import type { RecipeHtmlDetails } from '$stylist/html/interface/recipe/details';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<details>`: Disclosure control for hiding details. */
export default {
	component: HtmlDetails,
	args: { open: true },
	controls: {
		name: { type: 'text' },
		open: { type: 'boolean' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	presets: { Closed: { open: false } },
	content: [
		{ kind: 'element', tag: 'summary', children: [{ kind: 'text', value: 'More details' }] },
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'Hidden content revealed when the details are open.' }]
		}
	]
} satisfies ContractStory<RecipeHtmlDetails>;
