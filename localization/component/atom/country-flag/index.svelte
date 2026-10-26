<script lang="ts">
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import { LOCALIZATION_COUNTRY_FLAG_MESSAGE } from '$stylist/localization/const/record/country-flag-message';
	import { useLocale } from '$stylist/localization/function/hook/use-locale';
	import { useMessage } from '$stylist/localization/function/hook/use-message';
	import type { RecipeCountryFlag } from '$stylist/localization/interface/recipe/country-flag';
	import { createCountryFlagState } from '$stylist/localization/component/atom/country-flag/state.svelte';

	let props: RecipeCountryFlag = $props();
	const t = useMessage('country-flag', LOCALIZATION_COUNTRY_FLAG_MESSAGE);
	const locale = useLocale();
	const state = createCountryFlagState(
		() => props,
		() => locale.locale
	);
</script>

<!-- An emoji flag is an image to assistive tech: its name is the country in the interface language. -->
{#if state.isValid}
	<HtmlSpan
		role="img"
		aria-label={t('flag', { country: state.country })}
		{...state.restProps}
		class={['localization-country-flag', props.class]}
		style="--localization-country-flag-size: {state.size}px"
	>
		{state.emoji}
	</HtmlSpan>
{:else}
	<HtmlSpan
		role="img"
		aria-label={props.content ?? t('unknown')}
		{...state.restProps}
		class={['localization-country-flag', 'localization-country-flag--fallback', props.class]}
		style="--localization-country-flag-size: {state.size}px"
	>
		{props.content ?? '?'}
	</HtmlSpan>
{/if}

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer localization {
		:global {
			/* The flag is sized by its `size` prop, not by the surrounding text. */
			:where(.localization-country-flag) {
				display: inline-block;
				font-size: var(--localization-country-flag-size, 1.5em);
				line-height: 1;
			}
			:where(.localization-country-flag--fallback) {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				inline-size: var(--localization-country-flag-size, 1.5em);
				block-size: var(--localization-country-flag-size, 1.5em);
				border-radius: var(--radius-1);
				background: var(--color-background-secondary);
				color: var(--color-text-secondary);
				font-size: calc(var(--localization-country-flag-size, 1.5em) * 0.5);
			}
		}
	}
</style>
