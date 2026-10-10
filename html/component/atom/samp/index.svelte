<script lang="ts">
	import type { RecipeHtmlSamp } from '../../../interface/recipe/samp';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSamp = $props();
</script>

<samp bind:this={element} {...rest}>{@render children?.()}</samp>
