<script lang="ts">
	import type { RecipeHtmlSummary } from '../../../interface/recipe/summary';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSummary = $props();
</script>

<summary bind:this={element} {...rest}>{@render children?.()}</summary>
