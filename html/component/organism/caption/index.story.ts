import HtmlCaption from './index.svelte';
import type { RecipeHtmlCaption } from '../../../interface/recipe/caption';
import type { ContractStory } from '../../../interface/contract/story';

/** `<caption>`: Table caption. */
export default {
	component: HtmlCaption,
	content: [{ kind: 'text', value: 'Quarterly results' }],
	context: {
		kind: 'element',
		tag: 'table',
		children: [
			{ kind: 'outlet' },
			{
				kind: 'element',
				tag: 'tbody',
				children: [
					{
						kind: 'element',
						tag: 'tr',
						children: [
							{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.1' }] },
							{ kind: 'element', tag: 'td', children: [{ kind: 'text', value: 'Cell 1.2' }] }
						]
					}
				]
			}
		]
	},
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlCaption>;
