<script lang="ts">
	import type { RecipeHtmlStrong } from '$stylist/html/interface/recipe/strong';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlStrong = $props();
</script>

<strong bind:this={element} {...rest}>{@render children?.()}</strong>
