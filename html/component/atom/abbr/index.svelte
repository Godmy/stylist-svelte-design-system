<script lang="ts">
	import type { RecipeHtmlAbbr } from '../../../interface/recipe/abbr';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlAbbr = $props();
</script>

<abbr bind:this={element} {...rest}>{@render children?.()}</abbr>
