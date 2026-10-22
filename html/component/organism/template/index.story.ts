import HtmlTemplate from '$stylist/html/component/organism/template/index.svelte';
import type { RecipeHtmlTemplate } from '$stylist/html/interface/recipe/template';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<template>`: Template. */
export default {
	component: HtmlTemplate,
	controls: {
		shadowrootmode: { type: 'text' },
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	},
	content: [
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'Inert template content is not rendered.' }]
		}
	]
} satisfies ContractStory<RecipeHtmlTemplate>;
