<script lang="ts">
	import type { RecipeHtmlHr } from '../../../interface/recipe/hr';

	let { element = $bindable(null), ...rest }: RecipeHtmlHr = $props();
</script>

<hr bind:this={element} {...rest} />
