<script lang="ts">
	import type { RecipeHtmlInputRange } from '../../../interface/recipe/input-range';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputRange = $props();
</script>

<input bind:this={element} {...rest} type="range" bind:value />
