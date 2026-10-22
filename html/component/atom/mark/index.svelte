<script lang="ts">
	import type { RecipeHtmlMark } from '$stylist/html/interface/recipe/mark';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlMark = $props();
</script>

<mark bind:this={element} {...rest}>{@render children?.()}</mark>
