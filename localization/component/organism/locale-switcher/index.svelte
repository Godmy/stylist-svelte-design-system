<script lang="ts">
	import HtmlButton from '$stylist/html/component/atom/button/index.svelte';
	import HtmlDd from '$stylist/html/component/organism/dd/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlDl from '$stylist/html/component/molecule/dl/index.svelte';
	import HtmlDt from '$stylist/html/component/organism/dt/index.svelte';
	import HtmlFooter from '$stylist/html/component/organism/footer/index.svelte';
	import HtmlH3 from '$stylist/html/component/atom/h3/index.svelte';
	import HtmlH4 from '$stylist/html/component/atom/h4/index.svelte';
	import HtmlHeader from '$stylist/html/component/organism/header/index.svelte';
	import HtmlLabel from '$stylist/html/component/atom/label/index.svelte';
	import HtmlLi from '$stylist/html/component/organism/li/index.svelte';
	import HtmlOption from '$stylist/html/component/atom/option/index.svelte';
	import HtmlP from '$stylist/html/component/atom/p/index.svelte';
	import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
	import HtmlSelect from '$stylist/html/component/molecule/select/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import HtmlUl from '$stylist/html/component/molecule/ul/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import BaseFlag from '$stylist/svg/component/atom/flag/index.svelte';
	import { LOCALIZATION_LOCALE_SWITCHER_MESSAGE } from '$stylist/localization/const/record/locale-switcher-message';
	import { useLocale } from '$stylist/localization/function/hook/use-locale';
	import { useMessage } from '$stylist/localization/function/hook/use-message';
	import type { RecipeLocaleSwitcher } from '$stylist/localization/interface/recipe/locale-switcher';
	import createLocaleSwitcherState from '$stylist/localization/component/organism/locale-switcher/state.svelte';

	let { onLocaleChange, onTimezoneChange, ...stateProps }: RecipeLocaleSwitcher = $props();
	const id = $props.id();
	const t = useMessage('locale-switcher', LOCALIZATION_LOCALE_SWITCHER_MESSAGE);
	const state = createLocaleSwitcherState(() => stateProps, useLocale());
</script>

<HtmlSection
	{...state.restProps}
	class={['localization-locale-switcher', stateProps.class]}
	aria-labelledby="{id}-title"
>
	<HtmlHeader class={['localization-locale-switcher__header', stateProps.headerClass]}>
		<HtmlH3 id="{id}-title" class="localization-locale-switcher__title">
			<BaseIcon name="globe" size={20} />
			{t('title')}
		</HtmlH3>
		<HtmlP class="localization-locale-switcher__subtitle">{t('subtitle')}</HtmlP>
	</HtmlHeader>

	<HtmlDiv class={['localization-locale-switcher__content', stateProps.contentClass]}>
		<HtmlDiv>
			<HtmlH4 class="localization-locale-switcher__section">{t('locales')}</HtmlH4>
			<HtmlUl class="localization-locale-switcher__locales">
				{#each state.locales as locale (locale.code)}
					{@const current = locale.code === state.currentLocale}
					<HtmlLi>
						<HtmlButton
							type="button"
							class={['localization-locale-switcher__locale', stateProps.localeClass]}
							aria-current={current ? 'true' : undefined}
							onclick={() => onLocaleChange?.(locale.code)}
						>
							{#if locale.flag}
								<BaseFlag flag={locale.flag} code={locale.code} size="1.5em" />
							{:else}
								<HtmlSpan class="localization-locale-switcher__badge" aria-hidden="true">
									{locale.code.split('-')[0]}
								</HtmlSpan>
							{/if}
							<HtmlSpan class="localization-locale-switcher__locale-text" lang={locale.code}>
								<HtmlSpan class="localization-locale-switcher__locale-name">{locale.name}</HtmlSpan>
								{#if state.showRegional && locale.region}
									<HtmlSpan class="localization-locale-switcher__muted">{locale.region}</HtmlSpan>
								{/if}
							</HtmlSpan>
							{#if current}
								<BaseIcon name="check" size={20} class="localization-locale-switcher__check" />
							{/if}
						</HtmlButton>
					</HtmlLi>
				{/each}
			</HtmlUl>
		</HtmlDiv>

		<HtmlDiv>
			<HtmlH4 class="localization-locale-switcher__section">{t('preview')}</HtmlH4>
			<HtmlDiv class="localization-locale-switcher__preview">
				{#if state.currentLocaleObj}
					<HtmlP class="localization-locale-switcher__preview-locale">
						<BaseIcon name="globe" size={16} />
						{state.currentLocaleObj.name}
						{#if state.showRegional && state.currentLocaleObj.region}
							({state.currentLocaleObj.region})
						{/if}
					</HtmlP>
				{/if}
				<HtmlDl class="localization-locale-switcher__formats">
					{#if state.showDatePreview}
						<HtmlDt>{t('date')}</HtmlDt>
						<HtmlDd lang={state.previewLocale}>{state.date}</HtmlDd>
					{/if}
					{#if state.showTimePreview}
						<HtmlDt>{t('time')}</HtmlDt>
						<HtmlDd lang={state.previewLocale}>{state.time}</HtmlDd>
					{/if}
					<HtmlDt>{t('dateTime')}</HtmlDt>
					<HtmlDd lang={state.previewLocale}>{state.dateTime}</HtmlDd>
				</HtmlDl>
				<HtmlP class="localization-locale-switcher__muted localization-locale-switcher__row">
					<BaseIcon name="clock" size={16} />
					{t('zone', { zone: state.currentTimezone })}
				</HtmlP>
			</HtmlDiv>

			{#if state.timezoneOptions.length > 0}
				<HtmlDiv class="localization-locale-switcher__zone">
					<HtmlLabel for="{id}-zone" class="localization-locale-switcher__zone-label">
						{t('zoneLabel')}
					</HtmlLabel>
					<HtmlSelect
						id="{id}-zone"
						class="localization-locale-switcher__zone-select"
						value={state.currentTimezone}
						onchange={(event) =>
							onTimezoneChange?.((event.currentTarget as HTMLSelectElement).value)}
					>
						{#each state.timezoneOptions as zone (zone.value)}
							<HtmlOption value={zone.value}>{zone.label}</HtmlOption>
						{/each}
					</HtmlSelect>
				</HtmlDiv>
			{/if}
		</HtmlDiv>
	</HtmlDiv>

	<HtmlFooter class={['localization-locale-switcher__footer', stateProps.footerClass]}>
		<HtmlSpan class="localization-locale-switcher__row">
			<BaseIcon name="user" size={16} />
			{t('current', { code: state.currentLocale })}
		</HtmlSpan>
		<HtmlSpan>{t('count', { count: state.locales.length })}</HtmlSpan>
	</HtmlFooter>
</HtmlSection>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer localization {
		:global {
			:where(.localization-locale-switcher) {
				--localization-locale-switcher-pad: calc(var(--space-6) * var(--density-scale, 1));
				overflow: hidden;
				border: var(--border-width-thin, 1px) solid var(--color-border-secondary);
				border-radius: var(--radius-3);
				background: var(--color-background-primary);
				box-shadow: var(--elevation-card);
				color: var(--color-text-primary);
			}
			:where(.localization-locale-switcher__header) {
				padding: calc(var(--space-5) * var(--density-scale, 1))
					var(--localization-locale-switcher-pad);
				border-block-end: var(--border-width-thin, 1px) solid var(--color-border-secondary);
			}
			:where(.localization-locale-switcher__title) {
				display: flex;
				align-items: center;
				gap: var(--space-2);
				margin: 0;
			}
			:where(.localization-locale-switcher__subtitle) {
				margin-block: var(--space-1) 0;
				color: var(--color-text-secondary);
			}
			:where(.localization-locale-switcher__content) {
				display: grid;
				grid-template-columns: repeat(auto-fit, minmax(min(100%, 18em), 1fr));
				gap: var(--localization-locale-switcher-pad);
				padding: var(--localization-locale-switcher-pad);
			}
			:where(.localization-locale-switcher__section) {
				margin-block: 0 calc(var(--space-3) * var(--density-scale, 1));
			}
			:where(.localization-locale-switcher__locales) {
				display: grid;
				gap: calc(var(--space-3) * var(--density-scale, 1));
				margin: 0;
				padding: 0;
				list-style: none;
			}
			:where(.localization-locale-switcher__locale) {
				display: flex;
				align-items: center;
				gap: calc(var(--space-3) * var(--density-scale, 1));
				box-sizing: border-box;
				inline-size: 100%;
				padding: calc(var(--space-4) * var(--density-scale, 1));
				border: var(--border-width-thin, 1px) solid var(--color-border-secondary);
				border-radius: var(--radius-3);
				background: none;
				color: inherit;
				font: inherit;
				text-align: start;
				cursor: pointer;
				transition: border-color var(--duration-150, 150ms) var(--easing-ease, ease);
			}
			:where(.localization-locale-switcher__locale):hover {
				border-color: var(--color-border-primary);
			}
			:where(.localization-locale-switcher__locale):focus-visible {
				outline: 2px solid var(--color-primary-500);
				outline-offset: 2px;
			}
			:where(.localization-locale-switcher__locale[aria-current='true']) {
				border-color: var(--color-primary-500);
				box-shadow: 0 0 0 2px color-mix(in srgb, var(--color-primary-500) 20%, transparent);
			}
			:where(.localization-locale-switcher__badge) {
				display: inline-flex;
				flex-shrink: 0;
				align-items: center;
				justify-content: center;
				inline-size: 2.5em;
				block-size: 2.5em;
				border-radius: var(--radius-full);
				background: var(--color-background-tertiary);
				font-weight: var(--font-weight-medium);
				text-transform: uppercase;
			}
			:where(.localization-locale-switcher__locale-text) {
				display: grid;
				flex: 1;
			}
			:where(.localization-locale-switcher__locale-name) {
				font-weight: var(--font-weight-medium);
			}
			:where(.localization-locale-switcher__muted) {
				color: var(--color-text-secondary);
				font-size: 0.875em;
			}
			:where(.localization-locale-switcher__check) {
				flex-shrink: 0;
				color: var(--color-primary-500);
			}
			:where(.localization-locale-switcher__preview) {
				padding: calc(var(--space-4) * var(--density-scale, 1));
				border: var(--border-width-thin, 1px) solid var(--color-border-secondary);
				border-radius: var(--radius-3);
				background: var(--color-background-secondary);
			}
			:where(.localization-locale-switcher__preview-locale, .localization-locale-switcher__row) {
				display: flex;
				align-items: center;
				gap: var(--space-2);
				margin: 0;
			}
			:where(.localization-locale-switcher__preview-locale) {
				margin-block-end: calc(var(--space-4) * var(--density-scale, 1));
				font-weight: var(--font-weight-medium);
			}
			:where(.localization-locale-switcher__formats) {
				display: grid;
				gap: var(--space-1);
				margin: 0 0 calc(var(--space-3) * var(--density-scale, 1));
			}
			:where(.localization-locale-switcher__formats dt) {
				color: var(--color-text-secondary);
				font-size: 0.75em;
			}
			:where(.localization-locale-switcher__formats dd) {
				margin: 0 0 var(--space-2);
				font-weight: var(--font-weight-medium);
			}
			:where(.localization-locale-switcher__zone) {
				display: grid;
				gap: var(--space-1);
				margin-block-start: calc(var(--space-4) * var(--density-scale, 1));
			}
			:where(.localization-locale-switcher__zone-label) {
				font-weight: var(--font-weight-medium);
			}
			:where(.localization-locale-switcher__zone-select) {
				padding: var(--space-2) var(--space-3);
				border: var(--border-width-thin, 1px) solid var(--color-border-secondary);
				border-radius: var(--radius-2);
				background: var(--color-background-primary);
				color: inherit;
				font: inherit;
			}
			:where(.localization-locale-switcher__zone-select):focus-visible {
				outline: 2px solid var(--color-primary-500);
				outline-offset: 1px;
			}
			:where(.localization-locale-switcher__footer) {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				gap: var(--space-2);
				padding: calc(var(--space-4) * var(--density-scale, 1))
					var(--localization-locale-switcher-pad);
				border-block-start: var(--border-width-thin, 1px) solid var(--color-border-secondary);
				color: var(--color-text-secondary);
				font-size: 0.875em;
			}
		}
	}
</style>
