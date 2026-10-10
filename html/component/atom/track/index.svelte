<script lang="ts">
	import type { RecipeHtmlTrack } from '../../../interface/recipe/track';

	let { element = $bindable(null), ...rest }: RecipeHtmlTrack = $props();
</script>

<track bind:this={element} {...rest} />
