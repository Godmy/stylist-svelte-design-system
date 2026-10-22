<script lang="ts">
	import type { RecipeHtmlH2 } from '$stylist/html/interface/recipe/h2';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlH2 = $props();
</script>

<h2 bind:this={element} {...rest}>{@render children?.()}</h2>
