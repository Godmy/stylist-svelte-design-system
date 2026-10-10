<script lang="ts">
	import type { RecipeHtmlInputCheckbox } from '../../../interface/recipe/input-checkbox';

	let {
		element = $bindable(null),
		checked = $bindable(),
		indeterminate = $bindable(),
		...rest
	}: RecipeHtmlInputCheckbox = $props();
</script>

<input bind:this={element} {...rest} type="checkbox" bind:checked bind:indeterminate />
