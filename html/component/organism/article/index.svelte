<script lang="ts">
	import type { RecipeHtmlArticle } from '../../../interface/recipe/article';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlArticle = $props();
</script>

<article bind:this={element} {...rest}>{@render children?.()}</article>
