<script lang="ts">
	import type { RecipeHtmlInputDatetimeLocal } from '../../../interface/recipe/input-datetime-local';

	let {
		element = $bindable(null),
		value = $bindable(),
		...rest
	}: RecipeHtmlInputDatetimeLocal = $props();
</script>

<input bind:this={element} {...rest} type="datetime-local" bind:value />
