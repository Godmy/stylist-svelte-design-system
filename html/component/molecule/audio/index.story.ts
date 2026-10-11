import HtmlAudio from './index.svelte';
import type { RecipeHtmlAudio } from '../../../interface/recipe/audio';
import type { ContractStory } from '../../../interface/contract/story';

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
		controls: { type: 'boolean' }
	}
} satisfies ContractStory<RecipeHtmlAudio>;
