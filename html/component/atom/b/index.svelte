<script lang="ts">
	import type { RecipeHtmlB } from '../../../interface/recipe/b';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlB = $props();
</script>

<b bind:this={element} {...rest}>{@render children?.()}</b>
