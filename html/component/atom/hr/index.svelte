<script lang="ts">
	import type { RecipeHtmlHr } from '$stylist/html/interface/recipe/hr';

	let { element = $bindable(null), ...rest }: RecipeHtmlHr = $props();
</script>

<hr bind:this={element} {...rest} />
