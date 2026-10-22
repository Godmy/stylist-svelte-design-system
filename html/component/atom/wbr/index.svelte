<script lang="ts">
	import type { RecipeHtmlWbr } from '$stylist/html/interface/recipe/wbr';

	let { element = $bindable(null), ...rest }: RecipeHtmlWbr = $props();
</script>

<wbr bind:this={element} {...rest} />
