<script lang="ts">
	import type { RecipeHtmlRawText } from '$stylist/html/interface/recipe/raw-text';
	import { serializeHtmlRawText } from '$stylist/html/function/serialize/html-raw-text';
	import { applyHtmlAttributes } from '$stylist/html/function/script/html-attributes';
	let { tag, text = '', element = $bindable(null), ...rest }: RecipeHtmlRawText = $props();
	let anchor: HTMLTemplateElement;
	const markup = $derived(serializeHtmlRawText(tag, text, rest));
	$effect(() => {
		// Reading markup reruns this effect after a raw-text/attribute replacement.
		void markup;
		element = anchor.previousElementSibling as HTMLStyleElement | HTMLScriptElement;
		return applyHtmlAttributes(element, rest);
	});
</script>

<!-- The entire element is serialized so Svelte's hydration markers stay outside raw text. -->
<!-- eslint-disable-next-line svelte/no-at-html-tags -->
{@html markup}<template bind:this={anchor}></template>
