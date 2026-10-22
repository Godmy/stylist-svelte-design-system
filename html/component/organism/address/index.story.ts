import HtmlAddress from '$stylist/html/component/organism/address/index.svelte';
import type { RecipeHtmlAddress } from '$stylist/html/interface/recipe/address';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** `<address>`: Contact information for a page or article element. */
export default {
	component: HtmlAddress,
	content: [{ kind: 'text', value: 'Jane Doe, 1 Example Street, Tbilisi' }],
	controls: {
		// Global attributes
		title: { type: 'text' },
		lang: { type: 'select', options: ['en', 'ru', 'ka', 'ar'] },
		dir: { type: 'select', options: ['ltr', 'rtl', 'auto'] },
		hidden: { type: 'boolean' },
		class: { type: 'text' }
	}
} satisfies ContractStory<RecipeHtmlAddress>;
