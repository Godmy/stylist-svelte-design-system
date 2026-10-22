<script lang="ts">
	import type { RecipeHtmlTfoot } from '$stylist/html/interface/recipe/tfoot';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlTfoot = $props();
</script>

<tfoot bind:this={element} {...rest}>{@render children?.()}</tfoot>
