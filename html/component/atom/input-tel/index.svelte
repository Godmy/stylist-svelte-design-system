<script lang="ts">
	import type { RecipeHtmlInputTel } from '../../../interface/recipe/input-tel';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputTel = $props();
</script>

<input bind:this={element} {...rest} type="tel" bind:value />
