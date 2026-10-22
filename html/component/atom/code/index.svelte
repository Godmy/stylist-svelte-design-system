<script lang="ts">
	import type { RecipeHtmlCode } from '$stylist/html/interface/recipe/code';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlCode = $props();
</script>

<code bind:this={element} {...rest}>{@render children?.()}</code>
