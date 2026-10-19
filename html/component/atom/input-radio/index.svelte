<script lang="ts">
	import type { RecipeHtmlInputRadio } from '../../../interface/recipe/input-radio';

	let { element = $bindable(null), group = $bindable(), ...rest }: RecipeHtmlInputRadio = $props();
</script>

{#if group === undefined && ('checked' in rest || 'defaultChecked' in rest)}
	<!-- Explicit native checked/defaultChecked works without a group binding. -->
	<input bind:this={element} {...rest} type="radio" />
{:else}
	<input bind:this={element} {...rest} type="radio" bind:group />
{/if}
