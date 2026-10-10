<script lang="ts">
	import type { RecipeHtmlData } from '../../../interface/recipe/data';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlData = $props();
</script>

<data bind:this={element} {...rest}>{@render children?.()}</data>
