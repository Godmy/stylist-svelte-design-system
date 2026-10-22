<script lang="ts">
	import type { RecipeHtmlVar } from '$stylist/html/interface/recipe/var';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlVar = $props();
</script>

<var bind:this={element} {...rest}>{@render children?.()}</var>
