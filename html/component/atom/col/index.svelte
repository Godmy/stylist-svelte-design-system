<script lang="ts">
	import type { RecipeHtmlCol } from '../../../interface/recipe/col';

	let { element = $bindable(null), ...rest }: RecipeHtmlCol = $props();
</script>

<col bind:this={element} {...rest} />
