<script lang="ts">
	import type { RecipeHtmlTr } from '../../../interface/recipe/tr';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlTr = $props();
</script>

<tr bind:this={element} {...rest}>{@render children?.()}</tr>
