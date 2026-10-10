<script lang="ts">
	import type { RecipeHtmlAddress } from '../../../interface/recipe/address';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlAddress = $props();
</script>

<address bind:this={element} {...rest}>{@render children?.()}</address>
