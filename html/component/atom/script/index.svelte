<script lang="ts">
	import type { RecipeHtmlScript } from '../../../interface/recipe/script';
	import RawText from '../raw-text/index.svelte';

	let { element = $bindable(null), text = '', ...rest }: RecipeHtmlScript = $props();
</script>

<RawText tag="script" bind:element {text} {...rest} />
