<script lang="ts">
	import type { RecipeHtmlUl } from '$stylist/html/interface/recipe/ul';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlUl = $props();
</script>

<ul bind:this={element} {...rest}>{@render children?.()}</ul>
