<script lang="ts">
	import type { RecipeHtmlInputButton } from '$stylist/html/interface/recipe/input-button';

	let { element = $bindable(null), ...rest }: RecipeHtmlInputButton = $props();
</script>

<input bind:this={element} {...rest} type="button" />
