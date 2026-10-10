<script lang="ts">
	import type { RecipeHtmlSource } from '../../../interface/recipe/source';

	let { element = $bindable(null), ...rest }: RecipeHtmlSource = $props();
</script>

<source bind:this={element} {...rest} />
