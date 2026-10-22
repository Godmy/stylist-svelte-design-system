<script lang="ts">
	import type { RecipeHtmlInputImage } from '$stylist/html/interface/recipe/input-image';

	let { element = $bindable(null), ...rest }: RecipeHtmlInputImage = $props();
</script>

<input bind:this={element} {...rest} type="image" />
