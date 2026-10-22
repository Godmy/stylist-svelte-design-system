<script lang="ts">
	import type { RecipeHtmlTbody } from '$stylist/html/interface/recipe/tbody';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlTbody = $props();
</script>

<tbody bind:this={element} {...rest}>{@render children?.()}</tbody>
