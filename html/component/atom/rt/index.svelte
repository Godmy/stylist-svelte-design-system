<script lang="ts">
	import type { RecipeHtmlRt } from '../../../interface/recipe/rt';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlRt = $props();
</script>

<rt bind:this={element} {...rest}>{@render children?.()}</rt>
