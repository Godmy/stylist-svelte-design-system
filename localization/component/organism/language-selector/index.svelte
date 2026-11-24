<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import HtmlButton from '$stylist/html/component/atom/button/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlInputSearch from '$stylist/html/component/atom/input-search/index.svelte';
	import HtmlLi from '$stylist/html/component/organism/li/index.svelte';
	import HtmlP from '$stylist/html/component/atom/p/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import HtmlUl from '$stylist/html/component/molecule/ul/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import BaseFlag from '$stylist/svg/component/atom/flag/index.svelte';

	import type { RecipeLanguageSelector } from '$stylist/localization/interface/recipe/language-selector';
	import createLanguageSelectorComponentState from '$stylist/localization/component/organism/language-selector/state.svelte';

	let props: RecipeLanguageSelector & HTMLAttributes<HTMLDivElement> = $props();
	const id = $props.id();
	const state = createLanguageSelectorComponentState(() => props);
</script>

<svelte:window onkeydown={state.onKeydown} onpointerdown={state.onPointerdown} />

<HtmlDiv
	bind:element={state.root}
	{...state.selector.restProps}
	class={['localization-language-selector', props.class]}
	data-size={state.selector.size}
	style="--localization-language-selector-accent: var(--color-{state.selector
		.tone}-500, var(--color-primary-500))"
>
	<HtmlButton
		bind:element={state.trigger}
		type="button"
		class={['localization-language-selector__trigger', props.buttonClass]}
		aria-expanded={state.selector.isOpen}
		aria-controls={state.selector.isOpen ? `${id}-list` : undefined}
		onclick={() => state.selector.toggleDropdown()}
	>
		{#if state.selector.selectedLanguage}
			{#if state.selector.showFlags && state.selector.selectedLanguage.flag}
				<BaseFlag
					flag={state.selector.selectedLanguage.flag}
					code={state.selector.selectedLanguage.code}
					class="localization-language-selector__flag"
				/>
			{/if}
			<HtmlSpan lang={state.selector.selectedLanguage.code}>
				{state.selector.selectedLanguage.name}
				{#if state.selector.showNativeName && state.selector.selectedLanguage.nativeName && state.selector.selectedLanguage.nativeName !== state.selector.selectedLanguage.name}
					<HtmlSpan class="localization-language-selector__native">
						({state.selector.selectedLanguage.nativeName})
					</HtmlSpan>
				{/if}
			</HtmlSpan>
		{:else}
			<BaseIcon name="globe" size={16} />
			<HtmlSpan>{state.t('placeholder')}</HtmlSpan>
		{/if}
		<BaseIcon name="chevron-down" size={16} class="localization-language-selector__chevron" />
	</HtmlButton>

	{#if state.selector.isOpen}
		<HtmlDiv
			id="{id}-list"
			class={['localization-language-selector__dropdown', props.dropdownClass]}
			data-placement={state.selector.placement}
		>
			{#if state.selector.searchable}
				<HtmlDiv class="localization-language-selector__search">
					<BaseIcon name="search" size={16} class="localization-language-selector__search-icon" />
					<HtmlInputSearch
						class="localization-language-selector__search-input"
						placeholder={state.t('search')}
						aria-label={state.t('search')}
						bind:value={state.selector.searchQuery}
					/>
				</HtmlDiv>
			{/if}

			{#if state.selector.filteredLanguages.length === 0}
				<HtmlP class="localization-language-selector__empty" role="status">{state.t('empty')}</HtmlP
				>
			{:else}
				<HtmlUl class="localization-language-selector__list" aria-label={state.t('list')}>
					{#each state.selector.filteredLanguages as language (language.code)}
						{@const current = language.code === state.selector.currentLanguage}
						<HtmlLi>
							<HtmlButton
								type="button"
								class={['localization-language-selector__item', props.languageClass]}
								aria-current={current ? 'true' : undefined}
								onclick={() => state.selector.selectLanguage(language.code)}
							>
								{#if state.selector.showFlags && language.flag}
									<BaseFlag
										flag={language.flag}
										code={language.code}
										class="localization-language-selector__flag"
									/>
								{/if}
								<HtmlSpan class="localization-language-selector__name" lang={language.code}>
									{language.name}
									{#if state.selector.showNativeName && language.nativeName && language.name !== language.nativeName}
										<HtmlSpan class="localization-language-selector__native">
											({language.nativeName})
										</HtmlSpan>
									{/if}
								</HtmlSpan>
								{#if current}
									<BaseIcon name="check" size={16} class="localization-language-selector__check" />
								{/if}
							</HtmlButton>
						</HtmlLi>
					{/each}
				</HtmlUl>
			{/if}

			<HtmlP class="localization-language-selector__count" aria-live="polite">
				{state.t('count', { count: state.selector.filteredLanguages.length })}
			</HtmlP>
		</HtmlDiv>
	{/if}
</HtmlDiv>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer localization {
		:global {
			:where(.localization-language-selector) {
				--localization-language-selector-pad: calc(var(--space-2) * var(--density-scale, 1));
				position: relative;
				display: inline-block;
			}
			:where(.localization-language-selector[data-size='sm']) {
				font-size: 0.875em;
			}
			:where(.localization-language-selector[data-size='lg']) {
				font-size: 1.125em;
			}
			:where(.localization-language-selector__trigger) {
				display: inline-flex;
				align-items: center;
				gap: var(--localization-language-selector-pad);
				padding-block: var(--localization-language-selector-pad);
				padding-inline: calc(var(--space-3) * var(--density-scale, 1));
				border: var(--border-width-thin, 1px) solid var(--color-border-primary);
				border-radius: var(--radius-2);
				background: var(--color-background-primary);
				box-shadow: var(--elevation-level1);
				color: var(--color-text-primary);
				font: inherit;
				font-weight: var(--font-weight-medium);
				cursor: pointer;
			}
			:where(.localization-language-selector__trigger):hover {
				background: var(--color-background-secondary);
			}
			:where(
				.localization-language-selector__trigger,
				.localization-language-selector__item
			):focus-visible {
				outline: 2px solid var(--localization-language-selector-accent);
				outline-offset: 2px;
			}
			:where(.localization-language-selector__chevron) {
				margin-inline-start: auto;
				color: var(--color-text-secondary);
			}
			:where(.localization-language-selector__native) {
				margin-inline-start: var(--space-1);
				color: var(--color-text-secondary);
			}
			:where(.localization-language-selector__dropdown) {
				position: absolute;
				inset-block-start: 100%;
				inset-inline-start: 0;
				z-index: var(--z-index-docked, 10);
				box-sizing: border-box;
				min-inline-size: max(100%, 14em);
				margin-block-start: var(--space-1);
				border: var(--border-width-thin, 1px) solid var(--color-border-primary);
				border-radius: var(--radius-2);
				background: var(--color-background-primary);
				box-shadow: var(--elevation-level2);
				color: var(--color-text-primary);
			}
			:where(.localization-language-selector__dropdown[data-placement='top']) {
				inset-block: auto 100%;
				margin-block: 0 var(--space-1);
			}
			:where(.localization-language-selector__search) {
				position: relative;
				padding: var(--localization-language-selector-pad);
				border-block-end: var(--border-width-thin, 1px) solid var(--color-border-primary);
			}
			:where(.localization-language-selector__search-icon) {
				position: absolute;
				inset-block: 0;
				inset-inline-start: calc(var(--localization-language-selector-pad) * 2);
				margin-block: auto;
				color: var(--color-text-secondary);
				pointer-events: none;
			}
			:where(.localization-language-selector__search-input) {
				box-sizing: border-box;
				inline-size: 100%;
				padding-block: var(--localization-language-selector-pad);
				padding-inline: 2.25em var(--localization-language-selector-pad);
				border: var(--border-width-thin, 1px) solid var(--color-border-primary);
				border-radius: var(--radius-2);
				background: var(--color-background-primary);
				color: inherit;
				font: inherit;
			}
			:where(.localization-language-selector__search-input):focus-visible {
				outline: 2px solid var(--localization-language-selector-accent);
				outline-offset: -1px;
			}
			:where(.localization-language-selector__list) {
				max-block-size: 15em;
				margin: 0;
				padding-block: var(--space-1);
				padding-inline: 0;
				overflow-y: auto;
				list-style: none;
			}
			:where(.localization-language-selector__item) {
				display: flex;
				align-items: center;
				gap: var(--localization-language-selector-pad);
				box-sizing: border-box;
				inline-size: 100%;
				padding-block: var(--localization-language-selector-pad);
				padding-inline: calc(var(--space-4) * var(--density-scale, 1));
				border: 0;
				background: none;
				color: inherit;
				font: inherit;
				text-align: start;
				cursor: pointer;
			}
			:where(.localization-language-selector__item):hover {
				background: var(--color-background-secondary);
			}
			:where(.localization-language-selector__item[aria-current='true']) {
				background: color-mix(
					in srgb,
					var(--localization-language-selector-accent) 12%,
					transparent
				);
				font-weight: var(--font-weight-medium);
			}
			:where(.localization-language-selector__flag) {
				flex-shrink: 0;
			}
			:where(.localization-language-selector__name) {
				flex: 1;
			}
			:where(.localization-language-selector__check) {
				color: var(--localization-language-selector-accent);
			}
			:where(.localization-language-selector__empty, .localization-language-selector__count) {
				margin: 0;
				padding-block: var(--localization-language-selector-pad);
				padding-inline: calc(var(--space-4) * var(--density-scale, 1));
				color: var(--color-text-secondary);
				font-size: 0.875em;
			}
			:where(.localization-language-selector__count) {
				border-block-start: var(--border-width-thin, 1px) solid var(--color-border-primary);
			}
		}
	}
</style>
