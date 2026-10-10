<script lang="ts">
	import type { RecipeHtmlCaption } from '../../../interface/recipe/caption';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlCaption = $props();
</script>

<caption bind:this={element} {...rest}>{@render children?.()}</caption>
