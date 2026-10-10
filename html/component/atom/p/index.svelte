<script lang="ts">
	import type { RecipeHtmlP } from '../../../interface/recipe/p';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlP = $props();
</script>

<p bind:this={element} {...rest}>{@render children?.()}</p>
