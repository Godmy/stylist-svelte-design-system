<script lang="ts">
	import type { RecipeHtmlSup } from '../../../interface/recipe/sup';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSup = $props();
</script>

<sup bind:this={element} {...rest}>{@render children?.()}</sup>
