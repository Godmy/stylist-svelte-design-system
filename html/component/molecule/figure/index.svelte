<script lang="ts">
	import type { RecipeHtmlFigure } from '$stylist/html/interface/recipe/figure';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlFigure = $props();
</script>

<figure bind:this={element} {...rest}>{@render children?.()}</figure>
