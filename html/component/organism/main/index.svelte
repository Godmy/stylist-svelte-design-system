<script lang="ts">
	import type { RecipeHtmlMain } from '$stylist/html/interface/recipe/main';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlMain = $props();
</script>

<main bind:this={element} {...rest}>{@render children?.()}</main>
