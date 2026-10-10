<script lang="ts">
	import type { RecipeHtmlThead } from '../../../interface/recipe/thead';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlThead = $props();
</script>

<thead bind:this={element} {...rest}>{@render children?.()}</thead>
