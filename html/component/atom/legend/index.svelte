<script lang="ts">
	import type { RecipeHtmlLegend } from '$stylist/html/interface/recipe/legend';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlLegend = $props();
</script>

<legend bind:this={element} {...rest}>{@render children?.()}</legend>
