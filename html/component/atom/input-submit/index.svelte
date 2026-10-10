<script lang="ts">
	import type { RecipeHtmlInputSubmit } from '../../../interface/recipe/input-submit';

	let { element = $bindable(null), ...rest }: RecipeHtmlInputSubmit = $props();
</script>

<input bind:this={element} {...rest} type="submit" />
