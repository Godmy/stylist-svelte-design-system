<script lang="ts">
	import type { RecipeHtmlHead } from '$stylist/html/interface/recipe/head';
	import { applyHtmlAttributes } from '$stylist/html/function/script/html-attributes';

	// eslint-disable-next-line @typescript-eslint/no-unused-vars -- bindable output: the existing document node
	let { element = $bindable(null), children, ...rest }: RecipeHtmlHead = $props();

	$effect(() => {
		element = document.head;
		return applyHtmlAttributes(document.head, rest);
	});
</script>

<svelte:head>{@render children?.()}</svelte:head>
