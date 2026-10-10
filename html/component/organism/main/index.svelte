<script lang="ts">
	import type { RecipeHtmlMain } from '../../../interface/recipe/main';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlMain = $props();
</script>

<main bind:this={element} {...rest}>{@render children?.()}</main>
