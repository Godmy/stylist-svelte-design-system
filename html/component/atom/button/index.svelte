<script lang="ts">
	import type { RecipeHtmlButton } from '../../../interface/recipe/button';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlButton = $props();
</script>

<button bind:this={element} {...rest}>{@render children?.()}</button>
