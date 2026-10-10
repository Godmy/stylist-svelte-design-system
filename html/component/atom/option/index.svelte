<script lang="ts">
	import type { RecipeHtmlOption } from '../../../interface/recipe/option';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlOption = $props();
</script>

<option bind:this={element} {...rest}>{@render children?.()}</option>
