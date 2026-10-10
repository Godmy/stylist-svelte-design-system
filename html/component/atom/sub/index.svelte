<script lang="ts">
	import type { RecipeHtmlSub } from '../../../interface/recipe/sub';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSub = $props();
</script>

<sub bind:this={element} {...rest}>{@render children?.()}</sub>
