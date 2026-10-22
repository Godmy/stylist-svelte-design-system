<script lang="ts">
	import type { RecipeHtmlMeter } from '$stylist/html/interface/recipe/meter';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlMeter = $props();
</script>

<meter bind:this={element} {...rest}>{@render children?.()}</meter>
