<script lang="ts">
	import type { RecipeHtmlIframe } from '$stylist/html/interface/recipe/iframe';

	let { element = $bindable(null), ...rest }: RecipeHtmlIframe = $props();
</script>

<iframe bind:this={element} {...rest}></iframe>
