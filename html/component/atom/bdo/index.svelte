<script lang="ts">
	import type { RecipeHtmlBdo } from '../../../interface/recipe/bdo';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlBdo = $props();
</script>

<bdo bind:this={element} {...rest}>{@render children?.()}</bdo>
