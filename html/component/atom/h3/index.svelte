<script lang="ts">
	import type { RecipeHtmlH3 } from '../../../interface/recipe/h3';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlH3 = $props();
</script>

<h3 bind:this={element} {...rest}>{@render children?.()}</h3>
