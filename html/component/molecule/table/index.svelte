<script lang="ts">
	import type { RecipeHtmlTable } from '$stylist/html/interface/recipe/table';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlTable = $props();
</script>

<table bind:this={element} {...rest}>{@render children?.()}</table>
