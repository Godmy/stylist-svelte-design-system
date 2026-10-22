<script lang="ts">
	import type { RecipeHtmlSearch } from '$stylist/html/interface/recipe/search';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSearch = $props();
</script>

<search bind:this={element} {...rest}>{@render children?.()}</search>
