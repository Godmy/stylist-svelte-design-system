<script lang="ts">
	import type { RecipeHtmlNav } from '$stylist/html/interface/recipe/nav';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlNav = $props();
</script>

<nav bind:this={element} {...rest}>{@render children?.()}</nav>
