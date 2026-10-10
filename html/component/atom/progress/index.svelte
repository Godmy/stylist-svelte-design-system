<script lang="ts">
	import type { RecipeHtmlProgress } from '../../../interface/recipe/progress';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlProgress = $props();
</script>

<progress bind:this={element} {...rest}>{@render children?.()}</progress>
