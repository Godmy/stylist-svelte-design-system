<script lang="ts">
	import type { RecipeHtmlH4 } from '$stylist/html/interface/recipe/h4';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlH4 = $props();
</script>

<h4 bind:this={element} {...rest}>{@render children?.()}</h4>
