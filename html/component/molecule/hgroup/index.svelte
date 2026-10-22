<script lang="ts">
	import type { RecipeHtmlHgroup } from '$stylist/html/interface/recipe/hgroup';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlHgroup = $props();
</script>

<hgroup bind:this={element} {...rest}>{@render children?.()}</hgroup>
