<script lang="ts">
	import type { RecipeHtmlFieldset } from '../../../interface/recipe/fieldset';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlFieldset = $props();
</script>

<fieldset bind:this={element} {...rest}>{@render children?.()}</fieldset>
