<script lang="ts">
	import type { RecipeHtmlInputPassword } from '../../../interface/recipe/input-password';

	let {
		element = $bindable(null),
		value = $bindable(),
		...rest
	}: RecipeHtmlInputPassword = $props();
</script>

<input bind:this={element} {...rest} type="password" bind:value />
