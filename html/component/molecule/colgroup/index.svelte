<script lang="ts">
	import type { RecipeHtmlColgroup } from '$stylist/html/interface/recipe/colgroup';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlColgroup = $props();
</script>

<colgroup bind:this={element} {...rest}>{@render children?.()}</colgroup>
