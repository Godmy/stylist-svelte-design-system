<script lang="ts">
	import type { RecipeHtmlSlot } from '../../../interface/recipe/slot';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSlot = $props();
</script>

<svelte:element this={"slot"} bind:this={element} {...rest}>{@render children?.()}</svelte:element>
