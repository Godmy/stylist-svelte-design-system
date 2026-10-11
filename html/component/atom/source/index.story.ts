import HtmlSource from './index.svelte';
import type { RecipeHtmlSource } from '../../../interface/recipe/source';
import type { ContractStory } from '../../../interface/contract/story';

/** `<source>`: Image source for img or media source for video or audio. */
export default {
	component: HtmlSource,
	// CC0 sample media from MDN interactive examples.
	args: {
		src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
		type: 'video/webm'
	},
	controls: {
		type: { type: 'select', options: ['video/webm', 'video/mp4'] },
		src: { type: 'text' },
		width: { type: 'number' },
		height: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	context: {
		kind: 'element',
		tag: 'video',
		attrs: { controls: true, width: 320, height: 180 },
		children: [{ kind: 'outlet' }]
	}
} satisfies ContractStory<RecipeHtmlSource>;
