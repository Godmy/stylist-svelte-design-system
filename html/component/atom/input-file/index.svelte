<script lang="ts">
	import type { RecipeHtmlInputFile } from '../../../interface/recipe/input-file';

	let { element = $bindable(null), files = $bindable(), ...rest }: RecipeHtmlInputFile = $props();
</script>

<input bind:this={element} {...rest} type="file" bind:files />
