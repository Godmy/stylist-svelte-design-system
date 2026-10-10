<script lang="ts">
	import type { RecipeHtmlDetails } from '../../../interface/recipe/details';

	let {
		element = $bindable(null),
		open = $bindable(false),
		children,
		...rest
	}: RecipeHtmlDetails = $props();
</script>

<details bind:this={element} {...rest} bind:open>{@render children?.()}</details>
