<script lang="ts">
	import type { RecipeHtmlOl } from '../../../interface/recipe/ol';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlOl = $props();
</script>

<ol bind:this={element} {...rest}>{@render children?.()}</ol>
