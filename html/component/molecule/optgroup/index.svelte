<script lang="ts">
	import type { RecipeHtmlOptgroup } from '$stylist/html/interface/recipe/optgroup';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlOptgroup = $props();
</script>

<optgroup bind:this={element} {...rest}>{@render children?.()}</optgroup>
