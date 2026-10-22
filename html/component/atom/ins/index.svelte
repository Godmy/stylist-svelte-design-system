<script lang="ts">
	import type { RecipeHtmlIns } from '$stylist/html/interface/recipe/ins';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlIns = $props();
</script>

<ins bind:this={element} {...rest}>{@render children?.()}</ins>
