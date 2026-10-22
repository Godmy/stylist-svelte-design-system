<script lang="ts">
	import type { RecipeHtmlVideo } from '$stylist/html/interface/recipe/video';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlVideo = $props();
</script>

<video bind:this={element} {...rest}>{@render children?.()}</video>
