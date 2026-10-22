<script lang="ts">
	import type { RecipeHtmlBlockquote } from '$stylist/html/interface/recipe/blockquote';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlBlockquote = $props();
</script>

<blockquote bind:this={element} {...rest}>{@render children?.()}</blockquote>
