import HtmlTrack from '$stylist/html/component/atom/track/index.svelte';
import type { RecipeHtmlTrack } from '$stylist/html/interface/recipe/track';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<track>`: Timed text track. */
export default {
	component: HtmlTrack,
	// CC0 sample media from MDN interactive examples.
	args: {
		kind: 'captions',
		srclang: 'en',
		label: 'English',
		src: 'data:text/vtt,WEBVTT%0A%0A00:00.000 --%3E 00:05.000%0AA flower opens%0A',
		default: true
	},
	controls: {
		default: { type: 'boolean' },
		kind: {
			type: 'select',
			options: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata']
		},
		label: { type: 'text' },
		src: { type: 'text' },
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
		children: [
			{
				kind: 'element',
				tag: 'source',
				attrs: {
					src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
					type: 'video/mp4'
				}
			},
			{ kind: 'outlet' }
		]
	}
} satisfies ContractStory<RecipeHtmlTrack>;
