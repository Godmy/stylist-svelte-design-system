import HtmlNav from '$stylist/html/component/organism/nav/index.svelte';
import type { RecipeHtmlNav } from '$stylist/html/interface/recipe/nav';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<nav>`: Section with navigational links. */
export default {
	component: HtmlNav,
	content: [
		{
			kind: 'element',
			tag: 'ul',
			children: [
				{
					kind: 'element',
					tag: 'li',
					children: [
						{
							kind: 'element',
							tag: 'a',
							attrs: { href: '#home' },
							children: [{ kind: 'text', value: 'Home' }]
						}
					]
				},
				{
					kind: 'element',
					tag: 'li',
					children: [
						{
							kind: 'element',
							tag: 'a',
							attrs: { href: '#catalog' },
							children: [{ kind: 'text', value: 'Catalog' }]
						}
					]
				},
				{
					kind: 'element',
					tag: 'li',
					children: [
						{
							kind: 'element',
							tag: 'a',
							attrs: { href: '#contacts' },
							children: [{ kind: 'text', value: 'Contacts' }]
						}
					]
				}
			]
		}
	],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlNav>;
