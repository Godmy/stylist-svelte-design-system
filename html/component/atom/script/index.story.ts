import HtmlScript from './index.svelte';
import type { RecipeHtmlScript } from '../../../interface/recipe/script';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<script>`: Embedded script. */
export default {
	component: HtmlScript,
	args: { text: "console.info('html story script');" },
	controls: {
		src: { type: 'text' },
		type: { type: 'text' },
		crossorigin: { type: 'select', options: ['anonymous', 'use-credentials'] },
		referrerpolicy: {
			type: 'select',
			options: [
				'no-referrer',
				'origin',
				'same-origin',
				'strict-origin-when-cross-origin',
				'unsafe-url'
			]
		},
		text: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlScript>;
