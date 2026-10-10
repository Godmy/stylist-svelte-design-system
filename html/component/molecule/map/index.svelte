<script lang="ts">
	import type { RecipeHtmlMap } from '../../../interface/recipe/map';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlMap = $props();
</script>

<map bind:this={element} {...rest}>{@render children?.()}</map>
