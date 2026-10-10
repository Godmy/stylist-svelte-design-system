<script lang="ts">
	import type { RecipeHtmlTd } from '../../../interface/recipe/td';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlTd = $props();
</script>

<td bind:this={element} {...rest}>{@render children?.()}</td>
