<script lang="ts">
	import type { RecipeHtmlPre } from '../../../interface/recipe/pre';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlPre = $props();
</script>

<pre bind:this={element} {...rest}>{@render children?.()}</pre>
