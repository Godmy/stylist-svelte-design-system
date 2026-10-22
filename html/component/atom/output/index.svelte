<script lang="ts">
	import type { RecipeHtmlOutput } from '$stylist/html/interface/recipe/output';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlOutput = $props();
</script>

<output bind:this={element} {...rest}>{@render children?.()}</output>
