<script lang="ts">
	import type { RecipeHtmlInputText } from '$stylist/html/interface/recipe/input-text';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputText = $props();
</script>

<input bind:this={element} {...rest} type="text" bind:value />
