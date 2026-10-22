<script lang="ts">
	import type { RecipeHtmlSvg } from '$stylist/html/interface/recipe/svg';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSvg = $props();
</script>

<svg bind:this={element} {...rest}>{@render children?.()}</svg>
