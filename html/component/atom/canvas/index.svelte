<script lang="ts">
	import type { RecipeHtmlCanvas } from '$stylist/html/interface/recipe/canvas';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlCanvas = $props();
</script>

<canvas bind:this={element} {...rest}>{@render children?.()}</canvas>
