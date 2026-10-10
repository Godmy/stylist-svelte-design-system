<script lang="ts">
	import type { RecipeHtmlSection } from '../../../interface/recipe/section';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlSection = $props();
</script>

<section bind:this={element} {...rest}>{@render children?.()}</section>
