<script lang="ts">
	import type { RecipeHtmlLink } from '$stylist/html/interface/recipe/link';

	let { element = $bindable(null), ...rest }: RecipeHtmlLink = $props();
</script>

<link bind:this={element} {...rest} />
