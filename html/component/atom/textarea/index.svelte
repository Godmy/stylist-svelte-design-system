<script lang="ts">
	import type { RecipeHtmlTextarea } from '$stylist/html/interface/recipe/textarea';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlTextarea = $props();
</script>

<textarea bind:this={element} {...rest} bind:value></textarea>
