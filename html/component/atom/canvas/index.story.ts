import HtmlCanvas from './index.svelte';
import type { RecipeHtmlCanvas } from '../../../interface/recipe/canvas';
import type { ContractStory } from '../../../interface/contract/story';

/** `<canvas>`: Scriptable bitmap canvas. */
export default {
	component: HtmlCanvas,
	args: { width: 240, height: 140, style: 'border: 1px dashed currentColor' },
	controls: {
		width: { type: 'number' },
		height: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [
		{ kind: 'element', tag: 'p', children: [{ kind: 'text', value: 'Canvas fallback content.' }] }
	]
} satisfies ContractStory<RecipeHtmlCanvas>;
