<script lang="ts">
	import type { RecipeHtmlForm } from '../../../interface/recipe/form';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlForm = $props();
</script>

<form bind:this={element} {...rest}>{@render children?.()}</form>
