<script lang="ts">
	import type { RecipeHtmlImg } from '../../../interface/recipe/img';

	let { element = $bindable(null), ...rest }: RecipeHtmlImg = $props();
</script>

<img bind:this={element} {...rest} />
