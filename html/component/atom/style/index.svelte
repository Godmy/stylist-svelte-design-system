<script lang="ts">
	import type { RecipeHtmlStyle } from '../../../interface/recipe/style';
	import RawText from '../raw-text/index.svelte';

	let { element = $bindable(null), text = '', ...rest }: RecipeHtmlStyle = $props();
</script>

<RawText tag="style" bind:element {text} {...rest} />
