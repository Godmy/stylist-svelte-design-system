<script lang="ts">
	import type { RecipeHtmlMeta } from '../../../interface/recipe/meta';

	let { element = $bindable(null), ...rest }: RecipeHtmlMeta = $props();
</script>

<meta bind:this={element} {...rest} />
