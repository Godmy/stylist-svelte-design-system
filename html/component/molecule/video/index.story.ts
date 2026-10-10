import HtmlVideo from './index.svelte';
import type { RecipeHtmlVideo } from '../../../interface/recipe/video';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

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
		height: { type: 'number' }
	}
} satisfies ContractStory<RecipeHtmlVideo>;
