<script lang="ts">
	import type { RecipeHtmlBdi } from '../../../interface/recipe/bdi';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlBdi = $props();
</script>

<bdi bind:this={element} {...rest}>{@render children?.()}</bdi>
