<script lang="ts">
	import type { RecipeHtmlSelectedcontent } from '$stylist/html/interface/recipe/selectedcontent';

	let { element = $bindable(null), ...rest }: RecipeHtmlSelectedcontent = $props();
</script>

<selectedcontent bind:this={element} {...rest}></selectedcontent>
