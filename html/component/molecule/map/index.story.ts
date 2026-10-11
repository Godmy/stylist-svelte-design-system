import HtmlMap from './index.svelte';
import type { RecipeHtmlMap } from '../../../interface/recipe/map';
import type { ContractStory } from '../../../interface/contract/story';

/** `<map>`: Image map. */
export default {
	component: HtmlMap,
	controls: {
		name: { type: 'text' }
	},
	content: [
		{
			kind: 'element',
			tag: 'area',
			attrs: { shape: 'rect', coords: '0,0,120,140', href: '#left', alt: 'Left half' }
		}
	]
} satisfies ContractStory<RecipeHtmlMap>;
