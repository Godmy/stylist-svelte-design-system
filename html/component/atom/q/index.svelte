<script lang="ts">
	import type { RecipeHtmlQ } from '$stylist/html/interface/recipe/q';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlQ = $props();
</script>

<q bind:this={element} {...rest}>{@render children?.()}</q>
