<script lang="ts">
	import type { RecipeHtmlI } from '../../../interface/recipe/i';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlI = $props();
</script>

<i bind:this={element} {...rest}>{@render children?.()}</i>
