<script lang="ts">
	import type { RecipeHtmlInputNumber } from '$stylist/html/interface/recipe/input-number';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputNumber = $props();
</script>

<input bind:this={element} {...rest} type="number" bind:value />
