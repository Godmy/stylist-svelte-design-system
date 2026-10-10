<script lang="ts">
	import type { RecipeHtmlAudio } from '../../../interface/recipe/audio';

	let { element = $bindable(null), children, ...rest }: RecipeHtmlAudio = $props();
</script>

<audio bind:this={element} {...rest}>{@render children?.()}</audio>
