import HtmlDetails from './index.svelte';
import type { RecipeHtmlDetails } from '../../../interface/recipe/details';
import type { ContractStory } from '../../../interface/contract/story';

/** `<details>`: Disclosure control for hiding details. */
export default {
	component: HtmlDetails,
	args: { open: true },
	controls: {
		name: { type: 'text' },
		open: { type: 'boolean' }
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
