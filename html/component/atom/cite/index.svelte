<script lang="ts">
	import type { RecipeHtmlCite } from '../../../interface/recipe/cite';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlCite = $props();
</script>

<cite bind:this={element} {...rest}>{@render children?.()}</cite>
