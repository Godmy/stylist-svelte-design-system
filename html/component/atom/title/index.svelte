<script lang="ts">
	import type { RecipeHtmlTitle } from '../../../interface/recipe/title';

	let { element = $bindable(null), text, ...rest }: RecipeHtmlTitle = $props();
</script>

<title bind:this={element} {...rest}>{text ?? ''}</title>
