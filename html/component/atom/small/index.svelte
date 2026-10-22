<script lang="ts">
	import type { RecipeHtmlSmall } from '$stylist/html/interface/recipe/small';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSmall = $props();
</script>

<small bind:this={element} {...rest}>{@render children?.()}</small>
