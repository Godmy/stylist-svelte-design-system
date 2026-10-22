<script lang="ts">
	import type { RecipeHtmlDfn } from '$stylist/html/interface/recipe/dfn';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlDfn = $props();
</script>

<dfn bind:this={element} {...rest}>{@render children?.()}</dfn>
