<script lang="ts">
	import type { RecipeHtmlStyle } from '$stylist/html/interface/recipe/style';
	import RawText from '$stylist/html/component/atom/raw-text/index.svelte';

	let { element = $bindable(null), text = '', ...rest }: RecipeHtmlStyle = $props();
</script>

<RawText tag="style" bind:element {text} {...rest} />
