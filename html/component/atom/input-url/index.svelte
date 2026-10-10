<script lang="ts">
	import type { RecipeHtmlInputUrl } from '../../../interface/recipe/input-url';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputUrl = $props();
</script>

<input bind:this={element} {...rest} type="url" bind:value />
