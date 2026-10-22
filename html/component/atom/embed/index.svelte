<script lang="ts">
	import type { RecipeHtmlEmbed } from '$stylist/html/interface/recipe/embed';

	let { element = $bindable(null), ...rest }: RecipeHtmlEmbed = $props();
</script>

<embed bind:this={element} {...rest} />
