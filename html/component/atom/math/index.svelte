<script lang="ts">
	import type { RecipeHtmlMath } from '$stylist/html/interface/recipe/math';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlMath = $props();
</script>

<math bind:this={element} {...rest}>{@render children?.()}</math>
