<script lang="ts">
	import type { RecipeHtmlArea } from '../../../interface/recipe/area';

	let { element = $bindable(null), ...rest }: RecipeHtmlArea = $props();
</script>

<area bind:this={element} {...rest} />
