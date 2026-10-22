<script lang="ts">
	import type { RecipeHtmlBdi } from '$stylist/html/interface/recipe/bdi';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlBdi = $props();
</script>

<bdi bind:this={element} {...rest}>{@render children?.()}</bdi>
