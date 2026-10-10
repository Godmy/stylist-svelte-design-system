<script lang="ts">
	import type { RecipeHtmlMenu } from '../../../interface/recipe/menu';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlMenu = $props();
</script>

<menu bind:this={element} {...rest}>{@render children?.()}</menu>
