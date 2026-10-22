<script lang="ts">
	import type { RecipeHtmlDd } from '$stylist/html/interface/recipe/dd';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlDd = $props();
</script>

<dd bind:this={element} {...rest}>{@render children?.()}</dd>
