<script lang="ts">
	import type { RecipeHtmlTh } from '$stylist/html/interface/recipe/th';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlTh = $props();
</script>

<th bind:this={element} {...rest}>{@render children?.()}</th>
