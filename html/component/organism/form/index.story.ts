import HtmlForm from './index.svelte';
import type { RecipeHtmlForm } from '../../../interface/recipe/form';
import type { ContractStory } from '../../../interface/contract/story';

/** `<form>`: User-submittable form. */
export default {
	component: HtmlForm,
	controls: {
		action: { type: 'text' },
		autocomplete: { type: 'select', options: ['on', 'off'] },
		enctype: {
			type: 'select',
			options: ['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']
		},
		method: { type: 'select', options: ['get', 'post', 'dialog'] },
		name: { type: 'text' },
		novalidate: { type: 'boolean' },
		rel: { type: 'text' },
		target: { type: 'select', options: ['_self', '_blank', '_parent', '_top'] }
	},
	content: [
		{
			kind: 'element',
			tag: 'label',
			children: [
				{ kind: 'text', value: 'Name ' },
				{ kind: 'element', tag: 'input', attrs: { name: 'name' } }
			]
		},
		{ kind: 'element', tag: 'button', children: [{ kind: 'text', value: 'Submit' }] }
	]
} satisfies ContractStory<RecipeHtmlForm>;
