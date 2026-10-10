<script lang="ts">
	import type { RecipeHtmlNoscript } from '../../../interface/recipe/noscript';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlNoscript = $props();
</script>

<!-- The literal noscript compiler path drops bindings/attributes in the client build. -->
<svelte:element this={"noscript"} bind:this={element} {...rest}
	>{@render children?.()}</svelte:element
>
