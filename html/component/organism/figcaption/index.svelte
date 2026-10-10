<script lang="ts">
	import type { RecipeHtmlFigcaption } from '../../../interface/recipe/figcaption';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlFigcaption = $props();
</script>

<!-- svelte-ignore a11y_figcaption_parent -->
<figcaption bind:this={element} {...rest}>{@render children?.()}</figcaption>
