<script lang="ts">
	import type { RecipeHtmlH6 } from '$stylist/html/interface/recipe/h6';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlH6 = $props();
</script>

<h6 bind:this={element} {...rest}>{@render children?.()}</h6>
