<script lang="ts">
	import type { RecipeHtmlDl } from '../../../interface/recipe/dl';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlDl = $props();
</script>

<dl bind:this={element} {...rest}>{@render children?.()}</dl>
