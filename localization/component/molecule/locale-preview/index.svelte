<script lang="ts">
	import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
	import HtmlH3 from '$stylist/html/component/atom/h3/index.svelte';
	import HtmlP from '$stylist/html/component/atom/p/index.svelte';
	import HtmlButton from '$stylist/html/component/atom/button/index.svelte';
	import { LOCALIZATION_LOCALE_PREVIEW_MESSAGE } from '$stylist/localization/const/record/locale-preview-message';
	import { useFormat } from '$stylist/localization/function/hook/use-format';
	import { useLocale } from '$stylist/localization/function/hook/use-locale';
	import { useMessage } from '$stylist/localization/function/hook/use-message';
	import type { RecipeLocalePreview } from '$stylist/localization/interface/recipe/locale-preview';

	let {
		count = 3,
		amount = 123456,
		date = '2026-10-26T09:30:00Z',
		class: className
	}: RecipeLocalePreview = $props();

	const t = useMessage('locale-preview', LOCALIZATION_LOCALE_PREVIEW_MESSAGE);
	const format = useFormat();
	const locale = useLocale();
</script>

<HtmlSection class={['localization-locale-preview', className]}>
	<HtmlH3>{t('heading')}</HtmlH3>
	<HtmlP>{t('files', { count })}</HtmlP>
	<HtmlP>{t('today', { date: format.date(date, { dateStyle: 'full' }) })}</HtmlP>
	<HtmlP>{t('total', { amount: format.money(amount) })}</HtmlP>
	<HtmlP>{t('direction', { dir: locale.dir })}</HtmlP>
	<HtmlButton type="button">{t('next')}</HtmlButton>
</HtmlSection>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer localization {
		:global {
			:where(.localization-locale-preview) {
				display: grid;
				gap: calc(var(--space-2) * var(--density-scale, 1));
				justify-items: start;
			}
		}
	}
</style>
