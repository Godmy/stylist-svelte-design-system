import HtmlAudio from '$stylist/html/component/molecule/audio/index.svelte';
import type { RecipeHtmlAudio } from '$stylist/html/interface/recipe/audio';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<audio>`: Audio player. */
export default {
	component: HtmlAudio,
	args: { controls: true },
	controls: {
		src: { type: 'text' },
		crossorigin: { type: 'select', options: ['anonymous', 'use-credentials'] },
		preload: { type: 'select', options: ['none', 'metadata', 'auto'] },
		autoplay: { type: 'boolean' },
		loop: { type: 'boolean' },
		muted: { type: 'boolean' },
		controls: { type: 'boolean' },
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
				src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
				type: 'audio/mpeg'
			}
		}
	]
} satisfies ContractStory<RecipeHtmlAudio>;
