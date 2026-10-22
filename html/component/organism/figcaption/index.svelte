<script lang="ts">
	import type { RecipeHtmlFigcaption } from '$stylist/html/interface/recipe/figcaption';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlFigcaption = $props();
</script>

<!-- svelte-ignore a11y_figcaption_parent -->
<figcaption bind:this={element} {...rest}>{@render children?.()}</figcaption>
