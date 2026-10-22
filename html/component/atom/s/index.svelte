<script lang="ts">
	import type { RecipeHtmlS } from '$stylist/html/interface/recipe/s';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlS = $props();
</script>

<s bind:this={element} {...rest}>{@render children?.()}</s>
