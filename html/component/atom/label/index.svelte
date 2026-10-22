<script lang="ts">
	import type { RecipeHtmlLabel } from '$stylist/html/interface/recipe/label';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlLabel = $props();
</script>

<label bind:this={element} {...rest}>{@render children?.()}</label>
