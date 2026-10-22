<script lang="ts">
	import type { RecipeHtmlInputWeek } from '$stylist/html/interface/recipe/input-week';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputWeek = $props();
</script>

<input bind:this={element} {...rest} type="week" bind:value />
