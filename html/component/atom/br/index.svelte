<script lang="ts">
	import type { RecipeHtmlBr } from '../../../interface/recipe/br';

	let { element = $bindable(null), ...rest }: RecipeHtmlBr = $props();
</script>

<br bind:this={element} {...rest} />
