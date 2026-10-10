<script lang="ts">
	import type { RecipeHtmlDel } from '../../../interface/recipe/del';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlDel = $props();
</script>

<del bind:this={element} {...rest}>{@render children?.()}</del>
