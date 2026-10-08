<script lang="ts">
	import type { RecipeCountryFlag } from '$stylist/localization/interface/recipe/country-flag';
	import { createCountryFlagState } from './state.svelte';

	let props: RecipeCountryFlag = $props();
	const state = createCountryFlagState(() => props);
</script>

{#if state.isValid}
	<span class={state.classes} style={state.style} {...state.restProps}>
		{state.emoji}
	</span>
{:else}
	<div class={state.fallbackClasses} style={state.fallbackStyle}>
		{#if props.content}
			{props.content}
		{:else}
			?
		{/if}
	</div>
{/if}

<style>
	.media__country-flag {
		display: inline-block;
	}
	.media__country-flag-fallback {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.125rem;
		background-color: var(--color-background-secondary);
		color: var(--color-text-secondary);
	}
</style>
