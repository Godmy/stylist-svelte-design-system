<script lang="ts">
	import type { RecipeLocaleSwitcher } from '$stylist/localization/interface/recipe/locale-switcher';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import BaseFlag from '$stylist/svg/component/atom/flag/index.svelte';
	import createLocaleSwitcherState from './state.svelte';
	import type { SlotLocaleSwitcher } from '$stylist/localization/interface/slot/locale-switcher';

	let { onLocaleChange, onTimezoneChange, ...stateProps }: RecipeLocaleSwitcher = $props();

	const state = createLocaleSwitcherState(stateProps);
</script>

<div class={state.rootClass} {...state.restProps}>
	<div class={state.headerClass}>
		<div class="c-locale-switcher__header-inner">
			<BaseIcon name={state.iconGlobe} class="_c1" />
			<h3 class="c-locale-switcher__title">Locale Switcher</h3>
		</div>
		<p class="c-locale-switcher__subtitle">Change language, region, and formatting preferences</p>
	</div>

	<div class={state.contentClass}>
		<div class="c-locale-switcher__grid">
			<div>
				<h4 class="c-locale-switcher__section-title">Language and Region</h4>
				<div class="c-locale-switcher__locale-list">
					{#each state.locales as locale}
						<button
							type="button"
							class={state.getLocaleButtonClass(locale.code === state.currentLocale)}
							onclick={() => onLocaleChange?.(locale.code)}
						>
							<div class="c-locale-switcher__locale-inner">
								{#if locale.flag}
									<BaseFlag
										flag={locale.flag}
										code={locale.code}
										class="c-locale-switcher__flag"
										size="1.5rem"
									/>
								{:else}
									<div class="c-locale-switcher__flag-fallback">
										<span class="c-locale-switcher__flag-code">
											{locale.code.split('-')[0]}
										</span>
									</div>
								{/if}
								<div>
									<div class="c-locale-switcher__locale-name">{locale.name}</div>
									{#if state.showRegional && locale.region}
										<div class="c-locale-switcher__locale-region">{locale.region}</div>
									{/if}
								</div>
							</div>
							{#if locale.code === state.currentLocale}
								<div class="c-locale-switcher__check">
									<BaseIcon name={state.iconCheck} size={20} />
								</div>
							{/if}
						</button>
					{/each}
				</div>
			</div>

			<div>
				<h4 class="c-locale-switcher__section-title">Date and Time Preview</h4>
				<div class="c-locale-switcher__preview-card">
					{#if state.currentLocaleObj}
						<div class="c-locale-switcher__preview-header">
							<BaseIcon name={state.iconGlobe} class="_c2" />
							<span class="c-locale-switcher__preview-locale">
								{state.currentLocaleObj.name}
								{state.showRegional && state.currentLocaleObj.region
									? `(${state.currentLocaleObj.region})`
									: ''}
							</span>
						</div>

						{#if state.showDatePreview}
							<div class="c-locale-switcher__preview-section">
								<div class="c-locale-switcher__preview-label">Date</div>
								<div class="c-locale-switcher__preview-value">
									{state.formatDate(state.now, state.currentLocale, state.currentTimezone)}
								</div>
							</div>
						{/if}

						{#if state.showTimePreview}
							<div class="c-locale-switcher__preview-section">
								<div class="c-locale-switcher__preview-label">Time</div>
								<div class="c-locale-switcher__preview-value">
									{state.formatTime(state.now, state.currentLocale, state.currentTimezone)}
								</div>
							</div>
						{/if}

						<div class="c-locale-switcher__preview-section">
							<div class="c-locale-switcher__preview-label">Date and Time</div>
							<div class="c-locale-switcher__preview-value">
								{state.formatDateTime(state.now, state.currentLocale, state.currentTimezone)}
							</div>
						</div>

						<div class="c-locale-switcher__timezone-row">
							<BaseIcon name={state.iconClock} class="_c3" />
							<span>Timezone: {state.currentTimezone}</span>
						</div>
					{/if}
				</div>

				{#if state.timezoneOptions.length > 0}
					<div class="c-locale-switcher__timezone-section">
						<label for="timezone" class="c-locale-switcher__timezone-label">Timezone</label>
						<select
							id="timezone"
							class={state.timezoneSelectClass}
							value={state.currentTimezone}
							onchange={(event) => onTimezoneChange?.((event.target as HTMLSelectElement).value)}
						>
							{#each state.timezoneOptions as tz}
								<option value={tz.value}>{tz.label}</option>
							{/each}
						</select>
					</div>
				{/if}
			</div>
		</div>
	</div>

	<div class={state.footerClass}>
		<div class="c-locale-switcher__footer-inner">
			<div class="c-locale-switcher__locale-info">
				<BaseIcon name={state.iconUser} class="_c3" />
				<span>Locale: {state.currentLocale}</span>
			</div>
			<div class="c-locale-switcher__locale-count">
				{state.locales.length} locale{state.locales.length === 1 ? '' : 's'} available
			</div>
		</div>
	</div>
</div>

<style>
	.c-locale-switcher {
		background: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
		border: 1px solid var(--color-border-secondary);
		overflow: hidden;
	}

	.c-locale-switcher__header {
		border-bottom: 1px solid var(--color-border-secondary);
		padding: 1.25rem 1.5rem;
	}

	.c-locale-switcher__header-inner {
		display: flex;
		align-items: center;
	}

	.c-locale-switcher__title {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}

	.c-locale-switcher__subtitle {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-locale-switcher__content {
		padding: 1.5rem;
	}

	.c-locale-switcher__grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.c-locale-switcher__grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	.c-locale-switcher__section-title {
		margin-bottom: 0.75rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-locale-switcher__locale-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.c-locale-switcher__locale-btn {
		display: flex;
		align-items: center;
		width: 100%;
		border-radius: 0.5rem;
		padding: 1rem;
		border: 1px solid var(--color-border-secondary);
		background: none;
		cursor: pointer;
		text-align: left;
		transition: border-color var(--duration-150, 150ms) ease;
	}

	.c-locale-switcher__locale-btn:hover {
		border-color: var(--color-border-primary);
	}

	.c-locale-switcher__locale-btn--active {
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 2px
			var(--color-primary-200, color-mix(in srgb, var(--color-primary-500) 20%, transparent));
	}

	.c-locale-switcher__locale-inner {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.c-locale-switcher__flag {
		margin-right: 0.75rem;
		font-size: 1.5rem;
		line-height: 1;
	}

	.c-locale-switcher__flag-fallback {
		margin-right: 0.75rem;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
		background: var(--color-background-tertiary);
		flex-shrink: 0;
	}

	.c-locale-switcher__flag-code {
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-locale-switcher__locale-name {
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-locale-switcher__locale-region {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-locale-switcher__check {
		margin-left: auto;
		color: var(--color-primary-600);
		flex-shrink: 0;
	}

	.c-locale-switcher__preview-card {
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-secondary);
		background: var(--color-background-secondary);
		padding: 1rem;
	}

	.c-locale-switcher__preview-header {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}

	.c-locale-switcher__preview-locale {
		font-size: 0.875rem;
		font-weight: 500;
	}

	.c-locale-switcher__preview-section {
		margin-bottom: 0.75rem;
	}

	.c-locale-switcher__preview-label {
		margin-bottom: 0.25rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.c-locale-switcher__preview-value {
		font-weight: 500;
	}

	.c-locale-switcher__timezone-section {
		margin-top: 1rem;
	}

	.c-locale-switcher__timezone-label {
		display: block;
		margin-bottom: 0.25rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-locale-switcher__timezone-select {
		display: block;
		width: 100%;
		padding: 0.5rem 2.5rem 0.5rem 0.75rem;
		font-size: 0.875rem;
		border: 1px solid var(--color-border-secondary);
		border-radius: 0.375rem;
		background: var(--color-background-primary);
	}

	.c-locale-switcher__timezone-select:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
		border-color: var(--color-primary-500);
	}

	.c-locale-switcher__timezone-row {
		display: flex;
		align-items: center;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.c-locale-switcher__footer {
		border-top: 1px solid var(--color-border-secondary);
		padding: 1rem 1.5rem;
	}

	.c-locale-switcher__footer-inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.c-locale-switcher__locale-info {
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.c-locale-switcher__locale-count {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	._c1 {
		margin-right: 0.5rem;
		height: 1.5rem;
		width: 1.5rem;
		color: var(--color-text-secondary);
	}
	._c2 {
		margin-right: 0.5rem;
		height: 1.25rem;
		width: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c3 {
		margin-right: 0.25rem;
		height: 1rem;
		width: 1rem;
	}
</style>
