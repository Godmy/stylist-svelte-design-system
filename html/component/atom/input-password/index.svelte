<script lang="ts">
	import type { RecipeHtmlInputPassword } from '$stylist/html/interface/recipe/input-password';

	let {
		element = $bindable(null),
		value = $bindable(),
		...rest
	}: RecipeHtmlInputPassword = $props();
</script>

<input bind:this={element} {...rest} type="password" bind:value />
