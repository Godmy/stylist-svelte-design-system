<script lang="ts">
	import type { RecipeHtmlInputRadio } from '../../../interface/recipe/input-radio';

	let { element = $bindable(null), group = $bindable(), ...rest }: RecipeHtmlInputRadio = $props();
</script>

<input bind:this={element} {...rest} type="radio" bind:group />
