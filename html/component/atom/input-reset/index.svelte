<script lang="ts">
	import type { RecipeHtmlInputReset } from '../../../interface/recipe/input-reset';

	let { element = $bindable(null), ...rest }: RecipeHtmlInputReset = $props();
</script>

<input bind:this={element} {...rest} type="reset" />
