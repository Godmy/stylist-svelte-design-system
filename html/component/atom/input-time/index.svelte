<script lang="ts">
	import type { RecipeHtmlInputTime } from '$stylist/html/interface/recipe/input-time';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputTime = $props();
</script>

<input bind:this={element} {...rest} type="time" bind:value />
