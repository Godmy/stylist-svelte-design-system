<script lang="ts">
	import type { RecipeHtmlDiv } from '$stylist/html/interface/recipe/div';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlDiv = $props();
</script>

<div bind:this={element} {...rest}>{@render children?.()}</div>
