<script lang="ts">
	import type { RecipeHtmlHtml } from '$stylist/html/interface/recipe/html';
	import { applyHtmlAttributes } from '$stylist/html/function/script/html-attributes';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- bindable output: the existing document node
	let { element = $bindable(null), children, ...rest }: RecipeHtmlHtml = $props();

	$effect(() => {
		element = document.documentElement as HTMLHtmlElement;
		return applyHtmlAttributes(document.documentElement, rest);
	});
</script>

{@render children?.()}
