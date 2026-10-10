<script lang="ts">
	import type { RecipeHtmlInputHidden } from '../../../interface/recipe/input-hidden';

	let { element = $bindable(null), ...rest }: RecipeHtmlInputHidden = $props();
</script>

<input bind:this={element} {...rest} type="hidden" />
