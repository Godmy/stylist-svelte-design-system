<script lang="ts">
	import type { RecipeHtmlEm } from '../../../interface/recipe/em';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlEm = $props();
</script>

<em bind:this={element} {...rest}>{@render children?.()}</em>
