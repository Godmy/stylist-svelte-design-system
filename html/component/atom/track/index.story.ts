import HtmlTrack from './index.svelte';
import type { RecipeHtmlTrack } from '../../../interface/recipe/track';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<track>`: Timed text track. */
export default {
	component: HtmlTrack,
	args: { kind: 'captions', srclang: 'en', label: 'English' },
	controls: {
		default: { type: 'boolean' },
		kind: {
			type: 'select',
			options: ['subtitles', 'captions', 'descriptions', 'chapters', 'metadata']
		},
		label: { type: 'text' },
		src: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlTrack>;
