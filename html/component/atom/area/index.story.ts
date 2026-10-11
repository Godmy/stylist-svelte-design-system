import HtmlArea from './index.svelte';
import type { RecipeHtmlArea } from '../../../interface/recipe/area';
import type { ContractStory } from '../../../interface/contract/story';

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
		},
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	context: {
		kind: 'element',
		tag: 'div',
		children: [
			{
				kind: 'element',
				tag: 'img',
				attrs: {
					src: 'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27240%27 height=%27140%27%3E%3Crect width=%27120%27 height=%27140%27 fill=%27%236366f1%27/%3E%3Crect x=%27120%27 width=%27120%27 height=%27140%27 fill=%27%2394a3b8%27/%3E%3C/svg%3E',
					alt: 'Image map: left half is a link',
					width: 240,
					height: 140,
					usemap: '#story-map'
				}
			},
			{ kind: 'element', tag: 'map', attrs: { name: 'story-map' }, children: [{ kind: 'outlet' }] }
		]
	}
} satisfies ContractStory<RecipeHtmlArea>;
