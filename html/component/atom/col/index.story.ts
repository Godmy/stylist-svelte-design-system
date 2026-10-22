import HtmlCol from '$stylist/html/component/atom/col/index.svelte';
import type { RecipeHtmlCol } from '$stylist/html/interface/recipe/col';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<col>`: Table column. */
export default {
	component: HtmlCol,
	args: { span: 1 },
	controls: {
		span: { type: 'number' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	context: {
		kind: 'element',
		tag: 'table',
		children: [
			{ kind: 'element', tag: 'colgroup', children: [{ kind: 'outlet' }] },
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
	}
} satisfies ContractStory<RecipeHtmlCol>;
