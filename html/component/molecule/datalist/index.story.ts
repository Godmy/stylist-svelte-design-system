import HtmlDatalist from './index.svelte';
import type { RecipeHtmlDatalist } from '../../../interface/recipe/datalist';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<datalist>`: Container for options for combo box control. */
export default {
	component: HtmlDatalist,
	content: [
		{
			kind: 'element',
			tag: 'option',
			attrs: { value: 'Chrome' },
			children: [{ kind: 'text', value: 'Chrome' }]
		},
		{
			kind: 'element',
			tag: 'option',
			attrs: { value: 'Firefox' },
			children: [{ kind: 'text', value: 'Firefox' }]
		}
	]
} satisfies ContractStory<RecipeHtmlDatalist>;
