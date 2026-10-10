<script lang="ts">
	import type { RecipeHtmlSpan } from '../../../interface/recipe/span';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSpan = $props();
</script>

<span bind:this={element} {...rest}>{@render children?.()}</span>
