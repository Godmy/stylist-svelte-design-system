<script lang="ts">
	import type { RecipeHtmlInputColor } from '$stylist/html/interface/recipe/input-color';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputColor = $props();
</script>

<input bind:this={element} {...rest} type="color" bind:value />
