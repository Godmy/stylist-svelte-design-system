<script lang="ts">
	import type { RecipeHtmlScript } from '$stylist/html/interface/recipe/script';
	import RawText from '$stylist/html/component/atom/raw-text/index.svelte';

	let { element = $bindable(null), text = '', ...rest }: RecipeHtmlScript = $props();
</script>

<RawText tag="script" bind:element {text} {...rest} />
