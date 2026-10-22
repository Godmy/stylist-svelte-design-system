<script lang="ts">
	import type { RecipeHtmlDel } from '$stylist/html/interface/recipe/del';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlDel = $props();
</script>

<del bind:this={element} {...rest}>{@render children?.()}</del>
