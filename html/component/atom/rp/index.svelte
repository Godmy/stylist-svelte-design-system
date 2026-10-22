<script lang="ts">
	import type { RecipeHtmlRp } from '$stylist/html/interface/recipe/rp';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlRp = $props();
</script>

<rp bind:this={element} {...rest}>{@render children?.()}</rp>
