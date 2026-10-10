<script lang="ts">
	import type { RecipeHtmlRuby } from '../../../interface/recipe/ruby';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlRuby = $props();
</script>

<ruby bind:this={element} {...rest}>{@render children?.()}</ruby>
