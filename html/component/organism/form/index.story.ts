import HtmlForm from '$stylist/html/component/organism/form/index.svelte';
import type { RecipeHtmlForm } from '$stylist/html/interface/recipe/form';
import type { ContractStory } from '$stylist/html/interface/contract/story';

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
		target: { type: 'select', options: ['_self', '_blank', '_parent', '_top'] },
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
			tag: 'label',
			children: [
				{ kind: 'text', value: 'Name ' },
				{ kind: 'element', tag: 'input', attrs: { name: 'name' } }
			]
		},
		{ kind: 'element', tag: 'button', children: [{ kind: 'text', value: 'Submit' }] }
	]
} satisfies ContractStory<RecipeHtmlForm>;
