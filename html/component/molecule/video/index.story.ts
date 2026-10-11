import HtmlVideo from './index.svelte';
import type { RecipeHtmlVideo } from '../../../interface/recipe/video';
import type { ContractStory } from '../../../interface/contract/story';

/** `<video>`: Video player. */
export default {
	component: HtmlVideo,
	args: { controls: true, width: 320, height: 180 },
	controls: {
		src: { type: 'text' },
		crossorigin: { type: 'select', options: ['anonymous', 'use-credentials'] },
		poster: { type: 'text' },
		preload: { type: 'select', options: ['none', 'metadata', 'auto'] },
		autoplay: { type: 'boolean' },
		playsinline: { type: 'boolean' },
		loop: { type: 'boolean' },
		muted: { type: 'boolean' },
		controls: { type: 'boolean' },
		width: { type: 'number' },
		height: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	// CC0 sample media from MDN interactive examples.
	content: [
		{
			kind: 'element',
			tag: 'source',
			attrs: {
				src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
				type: 'video/webm'
			}
		},
		{
			kind: 'element',
			tag: 'source',
			attrs: {
				src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
				type: 'video/mp4'
			}
		},
		{
			kind: 'element',
			tag: 'track',
			attrs: {
				kind: 'captions',
				srclang: 'en',
				label: 'English',
				src: 'data:text/vtt,WEBVTT%0A%0A00:00.000 --%3E 00:05.000%0AA flower opens%0A',
				default: true
			}
		}
	]
} satisfies ContractStory<RecipeHtmlVideo>;
