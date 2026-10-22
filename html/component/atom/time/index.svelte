<script lang="ts">
	import type { RecipeHtmlTime } from '$stylist/html/interface/recipe/time';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlTime = $props();
</script>

<time bind:this={element} {...rest}>{@render children?.()}</time>
