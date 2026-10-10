import HtmlArea from './index.svelte';
import type { RecipeHtmlArea } from '../../../interface/recipe/area';
import type { ContractStory } from '$stylist/domain/interface/contract/story';

/** `<area>`: Hyperlink or dead area on an image map. */
export default {
	component: HtmlArea,
	args: { shape: 'rect', coords: '0,0,120,140', href: '#area', alt: 'Area' },
	controls: {
		alt: { type: 'text' },
		coords: { type: 'text' },
		shape: { type: 'select', options: ['rect', 'circle', 'poly', 'default'] },
		href: { type: 'text' },
		target: { type: 'select', options: ['_self', '_blank', '_parent', '_top'] },
		download: { type: 'text' },
		rel: { type: 'text' },
		referrerpolicy: {
			type: 'select',
			options: [
				'no-referrer',
				'origin',
				'same-origin',
				'strict-origin-when-cross-origin',
				'unsafe-url'
			]
		}
	}
} satisfies ContractStory<RecipeHtmlArea>;
