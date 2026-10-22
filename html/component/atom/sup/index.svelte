<script lang="ts">
	import type { RecipeHtmlSup } from '$stylist/html/interface/recipe/sup';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSup = $props();
</script>

<sup bind:this={element} {...rest}>{@render children?.()}</sup>
