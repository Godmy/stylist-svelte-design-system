<script lang="ts">
	import type { RecipeHtmlH1 } from '$stylist/html/interface/recipe/h1';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlH1 = $props();
</script>

<h1 bind:this={element} {...rest}>{@render children?.()}</h1>
