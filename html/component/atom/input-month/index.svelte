<script lang="ts">
	import type { RecipeHtmlInputMonth } from '../../../interface/recipe/input-month';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputMonth = $props();
</script>

<input bind:this={element} {...rest} type="month" bind:value />
