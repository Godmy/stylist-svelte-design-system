<script lang="ts">
	import type { RecipeHtmlInput } from '../../../interface/recipe/input';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInput = $props();
</script>

<input bind:this={element} {...rest} bind:value />
