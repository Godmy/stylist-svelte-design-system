<script lang="ts">
	import type { RecipeHtmlInputFile } from '$stylist/html/interface/recipe/input-file';

	let { element = $bindable(null), files = $bindable(), ...rest }: RecipeHtmlInputFile = $props();
</script>

<input bind:this={element} {...rest} type="file" bind:files />
