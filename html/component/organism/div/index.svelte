<script lang="ts">
	import type { RecipeHtmlDiv } from '../../../interface/recipe/div';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlDiv = $props();
</script>

<div bind:this={element} {...rest}>{@render children?.()}</div>
