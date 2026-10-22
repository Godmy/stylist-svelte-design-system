<script lang="ts">
	import type { RecipeHtmlCol } from '$stylist/html/interface/recipe/col';

	let { element = $bindable(null), ...rest }: RecipeHtmlCol = $props();
</script>

<col bind:this={element} {...rest} />
