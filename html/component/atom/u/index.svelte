<script lang="ts">
	import type { RecipeHtmlU } from '../../../interface/recipe/u';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlU = $props();
</script>

<u bind:this={element} {...rest}>{@render children?.()}</u>
