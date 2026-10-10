<script lang="ts">
	import type { RecipeHtmlInputEmail } from '../../../interface/recipe/input-email';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputEmail = $props();
</script>

<input bind:this={element} {...rest} type="email" bind:value />
