<script lang="ts">
	import type { RecipeHtmlLi } from '../../../interface/recipe/li';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlLi = $props();
</script>

<li bind:this={element} {...rest}>{@render children?.()}</li>
