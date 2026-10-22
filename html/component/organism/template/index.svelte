<script lang="ts">
	import type { RecipeHtmlTemplate } from '$stylist/html/interface/recipe/template';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlTemplate = $props();
</script>

<template bind:this={element} {...rest}>{@render children?.()}</template>
