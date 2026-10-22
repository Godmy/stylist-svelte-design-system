<script lang="ts">
	import type { RecipeHtmlObject } from '$stylist/html/interface/recipe/object';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlObject = $props();
</script>

<object bind:this={element} {...rest}>{@render children?.()}</object>
