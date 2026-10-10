<script lang="ts">
	import type { RecipeHtmlPicture } from '../../../interface/recipe/picture';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlPicture = $props();
</script>

<picture bind:this={element} {...rest}>{@render children?.()}</picture>
