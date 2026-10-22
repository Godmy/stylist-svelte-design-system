<script lang="ts">
	import type { RecipeHtmlBase } from '$stylist/html/interface/recipe/base';

	let { element = $bindable(null), ...rest }: RecipeHtmlBase = $props();
</script>

<base bind:this={element} {...rest} />
