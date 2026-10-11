import HtmlTemplate from './index.svelte';
import type { RecipeHtmlTemplate } from '../../../interface/recipe/template';
import type { ContractStory } from '../../../interface/contract/story';

/** `<template>`: Template. */
export default {
	component: HtmlTemplate,
	controls: {
		shadowrootmode: { type: 'text' }
	},
	content: [
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'Inert template content is not rendered.' }]
		}
	]
} satisfies ContractStory<RecipeHtmlTemplate>;
