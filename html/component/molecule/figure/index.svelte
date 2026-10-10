<script lang="ts">
	import type { RecipeHtmlFigure } from '../../../interface/recipe/figure';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlFigure = $props();
</script>

<figure bind:this={element} {...rest}>{@render children?.()}</figure>
