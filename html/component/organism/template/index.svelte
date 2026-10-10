<script lang="ts">
	import type { RecipeHtmlTemplate } from '../../../interface/recipe/template';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlTemplate = $props();
</script>

<template bind:this={element} {...rest}>{@render children?.()}</template>
