<script lang="ts">
	import type { RecipeHtmlTextarea } from '../../../interface/recipe/textarea';

	let { element = $bindable(null), value = $bindable(), ...rest }: RecipeHtmlTextarea = $props();
</script>

<textarea bind:this={element} {...rest} bind:value></textarea>
