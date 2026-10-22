<script lang="ts">
	import type { RecipeHtmlDatalist } from '$stylist/html/interface/recipe/datalist';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlDatalist = $props();
</script>

<datalist bind:this={element} {...rest}>{@render children?.()}</datalist>
