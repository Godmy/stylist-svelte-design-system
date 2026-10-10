<script lang="ts">
	import type { RecipeHtmlKbd } from '../../../interface/recipe/kbd';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlKbd = $props();
</script>

<kbd bind:this={element} {...rest}>{@render children?.()}</kbd>
