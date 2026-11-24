<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';

	import { LOCALIZATION_LOCALE_FALLBACK } from '$stylist/localization/const/value/locale-fallback';

	import type { RecipeLocaleProvider } from '$stylist/localization/interface/recipe/locale-provider';
	import createLocaleProviderComponentState from '$stylist/localization/component/atom/locale-provider/state.svelte';

	let {
		locale = LOCALIZATION_LOCALE_FALLBACK,
		fallback = LOCALIZATION_LOCALE_FALLBACK,
		timeZone,
		currency,
		messages = {},
		document: syncDocument = false,
		class: className,
		children
	}: RecipeLocaleProvider = $props();

	const state = createLocaleProviderComponentState(() => ({
		locale: locale,
		fallback: fallback,
		timeZone: timeZone,
		currency: currency,
		messages: messages,
		document: syncDocument
	}));
</script>

<HtmlDiv class={['localization-locale-provider', className]} lang={locale} dir={state.dir}>
	{@render children?.()}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer localization {
		:global {
			/* The wrapper only carries lang and dir; layout belongs to its children. */
			:where(.localization-locale-provider) {
				display: contents;
			}
		}
	}
</style>
