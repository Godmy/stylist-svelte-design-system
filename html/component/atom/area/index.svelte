<script lang="ts">
	import type { RecipeHtmlArea } from '$stylist/html/interface/recipe/area';

	let { element = $bindable(null), ...rest }: RecipeHtmlArea = $props();
</script>

<area bind:this={element} {...rest} />
