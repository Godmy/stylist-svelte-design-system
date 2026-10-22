<script lang="ts">
	import type { RecipeHtmlImg } from '$stylist/html/interface/recipe/img';

	let { element = $bindable(null), ...rest }: RecipeHtmlImg = $props();
</script>

<img bind:this={element} {...rest} />
