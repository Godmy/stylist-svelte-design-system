import HtmlSvg from '$stylist/html/component/atom/svg/index.svelte';
import type { RecipeHtmlSvg } from '$stylist/html/interface/recipe/svg';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<svg>`: SVG root. SVG children are not HtmlNode tags, so index.story.svelte draws them. */
export default {
	component: HtmlSvg,
	args: { width: 240, height: 160, viewBox: '0 0 120 80', role: 'img', 'aria-label': 'Shapes' },
	controls: {
		width: { type: 'number' },
		height: { type: 'number' },
		viewBox: { type: 'text' },
		preserveAspectRatio: {
			type: 'select',
			options: ['xMidYMid meet', 'xMidYMid slice', 'none']
		},
		color: { type: 'color' },
		// Global attributes
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlSvg>;
