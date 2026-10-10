<script lang="ts">
	import type { RecipeHtmlHeader } from '../../../interface/recipe/header';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlHeader = $props();
</script>

<header bind:this={element} {...rest}>{@render children?.()}</header>
