<script lang="ts">
	import type { RecipeHtmlMeta } from '$stylist/html/interface/recipe/meta';

	let { element = $bindable(null), ...rest }: RecipeHtmlMeta = $props();
</script>

<meta bind:this={element} {...rest} />
