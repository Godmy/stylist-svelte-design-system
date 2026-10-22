<script lang="ts">
	import type { RecipeHtmlButton } from '$stylist/html/interface/recipe/button';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlButton = $props();
</script>

<button bind:this={element} {...rest}>{@render children?.()}</button>
