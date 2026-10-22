<script lang="ts">
	import type { RecipeHtmlFooter } from '$stylist/html/interface/recipe/footer';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlFooter = $props();
</script>

<footer bind:this={element} {...rest}>{@render children?.()}</footer>
