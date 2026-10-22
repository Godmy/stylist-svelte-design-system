import HtmlRawText from '$stylist/html/component/atom/raw-text/index.svelte';
import type { RecipeHtmlRawText } from '$stylist/html/interface/recipe/raw-text';
import type { ContractStory } from '$stylist/html/interface/contract/story';

/** Internal renderer of `<style>` and `<script>`: the whole element is serialized as raw text. */
export default {
	component: HtmlRawText,
	args: { tag: 'style', text: '.c-story-canvas { outline: 2px dashed rebeccapurple; }' },
	controls: {
		tag: { type: 'select', options: ['style', 'script'] },
		text: { type: 'text' }
	},
	presets: {
		Script: { tag: 'script', text: "console.info('raw-text story');" }
	}
} satisfies ContractStory<RecipeHtmlRawText>;
