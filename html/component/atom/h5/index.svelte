<script lang="ts">
	import type { RecipeHtmlH5 } from '../../../interface/recipe/h5';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlH5 = $props();
</script>

<h5 bind:this={element} {...rest}>{@render children?.()}</h5>
