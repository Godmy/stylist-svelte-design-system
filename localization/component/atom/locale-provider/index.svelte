<script lang="ts">
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import { ManagerLocaleContext } from '$stylist/localization/class/manager/locale-context';
	import { LOCALIZATION_LOCALE_FALLBACK } from '$stylist/localization/const/value/locale-fallback';
	import { resolveTextDirection } from '$stylist/localization/function/resolve/text-direction';
	import type { RecipeLocaleProvider } from '$stylist/localization/interface/recipe/locale-provider';

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

	const dir = $derived(resolveTextDirection(locale));

	ManagerLocaleContext.set({
		get locale() {
			return locale;
		},
		get fallback() {
			return fallback;
		},
		get dir() {
			return dir;
		},
		get timeZone() {
			return timeZone;
		},
		get currency() {
			return currency;
		},
		get messages() {
			return messages;
		}
	});

	$effect(() => {
		if (!syncDocument) return;
		const root = window.document.documentElement;
		root.lang = locale;
		root.dir = dir;
	});
</script>

<HtmlDiv class={['localization-locale-provider', className]} lang={locale} {dir}>
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
