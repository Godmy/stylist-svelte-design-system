<script lang="ts">
	import type { RecipeHtmlInputEmail } from '$stylist/html/interface/recipe/input-email';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlInputEmail = $props();
</script>

<input bind:this={element} {...rest} type="email" bind:value />
