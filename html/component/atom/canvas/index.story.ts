import HtmlCanvas from './index.svelte';
import type { RecipeHtmlCanvas } from '../../../interface/recipe/canvas';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<canvas>`: Scriptable bitmap canvas. */
export default {
	component: HtmlCanvas,
	args: { width: 240, height: 140 },
	controls: {
		width: { type: 'number' },
		height: { type: 'number' }
	},
	content: [
		{ kind: 'element', tag: 'p', children: [{ kind: 'text', value: 'Canvas fallback content.' }] }
	]
} satisfies ContractStory<RecipeHtmlCanvas>;
