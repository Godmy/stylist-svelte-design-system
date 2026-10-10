<script lang="ts">
	import type { RecipeHtmlHgroup } from '../../../interface/recipe/hgroup';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlHgroup = $props();
</script>

<hgroup bind:this={element} {...rest}>{@render children?.()}</hgroup>
