<script lang="ts">
	import type { RecipeHtmlInputSearch } from '../../../interface/recipe/input-search';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputSearch = $props();
</script>

<input bind:this={element} {...rest} type="search" bind:value />
