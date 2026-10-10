<script lang="ts">
	import type { RecipeHtmlSelect } from '../../../interface/recipe/select';

	let {
		element = $bindable(null),
		value = $bindable(),
		children,
		...rest
	}: RecipeHtmlSelect = $props();
</script>

<select bind:this={element} {...rest} bind:value>{@render children?.()}</select>
