import HtmlScript from './index.svelte';
import type { RecipeHtmlScript } from '../../../interface/recipe/script';
import type { ContractStory } from '../../../interface/contract/story';

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
		text: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlScript>;
