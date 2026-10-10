<script lang="ts">
	import type { RecipeHtmlDt } from '../../../interface/recipe/dt';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlDt = $props();
</script>

<dt bind:this={element} {...rest}>{@render children?.()}</dt>
