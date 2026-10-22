<script lang="ts">
	import type { RecipeHtmlAside } from '$stylist/html/interface/recipe/aside';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlAside = $props();
</script>

<aside bind:this={element} {...rest}>{@render children?.()}</aside>
