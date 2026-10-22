import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
import type { RecipeHtmlSection } from '$stylist/html/interface/recipe/section';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<section>`: Generic document or application section. */
export default {
	component: HtmlSection,
	content: [
		{ kind: 'element', tag: 'h2', children: [{ kind: 'text', value: 'Section heading' }] },
		{
			kind: 'element',
			tag: 'p',
			children: [{ kind: 'text', value: 'Sections group related content under a heading.' }]
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
} satisfies ContractStory<RecipeHtmlSection>;
