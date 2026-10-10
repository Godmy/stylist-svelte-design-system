<script lang="ts">
	import type { RecipeHtmlA } from '../../../interface/recipe/a';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlA = $props();
</script>

<a bind:this={element} {...rest}>{@render children?.()}</a>
