<script lang="ts">
	import type { RecipeHtmlInputDate } from '../../../interface/recipe/input-date';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputDate = $props();
</script>

<input bind:this={element} {...rest} type="date" bind:value />
