<script lang="ts">
	import HtmlButton from '$stylist/html/component/atom/button/index.svelte';
	import HtmlDiv from '$stylist/html/component/organism/div/index.svelte';
	import HtmlHeader from '$stylist/html/component/organism/header/index.svelte';
	import HtmlH3 from '$stylist/html/component/atom/h3/index.svelte';
	import HtmlInputFile from '$stylist/html/component/atom/input-file/index.svelte';
	import HtmlSection from '$stylist/html/component/organism/section/index.svelte';
	import HtmlSpan from '$stylist/html/component/atom/span/index.svelte';
	import HtmlTable from '$stylist/html/component/molecule/table/index.svelte';
	import HtmlTbody from '$stylist/html/component/molecule/tbody/index.svelte';
	import HtmlTd from '$stylist/html/component/organism/td/index.svelte';
	import HtmlTextarea from '$stylist/html/component/atom/textarea/index.svelte';
	import HtmlTh from '$stylist/html/component/organism/th/index.svelte';
	import HtmlThead from '$stylist/html/component/molecule/thead/index.svelte';
	import HtmlTr from '$stylist/html/component/molecule/tr/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	import type { RecipeTranslationEditor } from '$stylist/localization/interface/recipe/translation-editor';
	import createTranslationEditorState from '$stylist/localization/component/organism/translation-editor/state.svelte';

	let { onSave, onImport, onExport, ...stateProps }: RecipeTranslationEditor = $props();
	const id = $props.id();
	const state = createTranslationEditorState(() => ({ onImport: onImport, __rest: stateProps }));
</script>

<HtmlSection
	{...state.editor.restProps}
	class={['localization-translation-editor', stateProps.class]}
	aria-labelledby="{id}-title"
>
	<HtmlHeader class={['localization-translation-editor__header', stateProps.headerClass]}>
		<HtmlH3 id="{id}-title" class="localization-translation-editor__title">
			<BaseIcon name="languages" size={20} />
			{state.t('title')}
		</HtmlH3>
		<HtmlDiv class="localization-translation-editor__actions">
			{#if onImport}
				<HtmlInputFile
					bind:element={state.fileInput}
					class="localization-translation-editor__file"
					accept=".json,application/json"
					tabindex={-1}
					aria-hidden="true"
					onchange={state.importFile}
				/>
				<HtmlButton
					type="button"
					class="localization-translation-editor__icon-button"
					aria-label={state.t('import')}
					title={state.t('import')}
					onclick={() => state.fileInput?.click()}
				>
					<BaseIcon name="upload" size={16} />
				</HtmlButton>
			{/if}
			{#if onExport}
				<HtmlButton
					type="button"
					class="localization-translation-editor__icon-button"
					aria-label={state.t('export')}
					title={state.t('export')}
					onclick={() => onExport()}
				>
					<BaseIcon name="download" size={16} />
				</HtmlButton>
			{/if}
			{#if onSave}
				<HtmlButton
					type="button"
					class="localization-translation-editor__icon-button"
					aria-label={state.t('saveAll')}
					title={state.t('saveAll')}
					onclick={() => onSave()}
				>
					<BaseIcon name="save" size={16} />
				</HtmlButton>
			{/if}
		</HtmlDiv>
	</HtmlHeader>

	<HtmlDiv class="localization-translation-editor__scroll">
		<HtmlTable class={['localization-translation-editor__table', stateProps.tableClass]}>
			<HtmlThead>
				<HtmlTr>
					{#if state.editor.showKeyColumn}
						<HtmlTh scope="col">{state.t('key')}</HtmlTh>
					{/if}
					<HtmlTh scope="col">{state.t('source', { locale: state.editor.defaultLocale })}</HtmlTh>
					<HtmlTh scope="col"
						>{state.t('translation', { locale: state.editor.currentLocale })}</HtmlTh
					>
					{#if state.editor.showContextColumn}
						<HtmlTh scope="col">{state.t('context')}</HtmlTh>
					{/if}
					{#if state.editor.showStatusColumn}
						<HtmlTh scope="col">{state.t('status')}</HtmlTh>
					{/if}
					<HtmlTh scope="col" class="localization-translation-editor__end"
						>{state.t('actions')}</HtmlTh
					>
				</HtmlTr>
			</HtmlThead>
			<HtmlTbody>
				{#each state.editor.texts as text (text.id)}
					{@const value = state.editor.translation(text)}
					<HtmlTr class={['localization-translation-editor__row', stateProps.rowClass]}>
						{#if state.editor.showKeyColumn}
							<HtmlTd class="localization-translation-editor__muted">{text.key}</HtmlTd>
						{/if}
						<HtmlTd lang={state.editor.defaultLocale}>{text.original}</HtmlTd>
						<HtmlTd>
							{#if state.editor.editingId === text.id}
								<HtmlDiv
									class={['localization-translation-editor__editor', stateProps.editorClass]}
								>
									<HtmlTextarea
										class="localization-translation-editor__textarea"
										rows={3}
										lang={state.editor.currentLocale}
										dir="auto"
										aria-label={state.t('field', { key: text.key })}
										bind:value={state.editor.editedValue}
									/>
									<HtmlDiv class="localization-translation-editor__editor-actions">
										<HtmlButton
											type="button"
											class="localization-translation-editor__button"
											onclick={() => state.editor.cancelEdit()}
										>
											{state.t('cancel')}
										</HtmlButton>
										<HtmlButton
											type="button"
											class="localization-translation-editor__button"
											onclick={() => state.editor.saveEdit()}
										>
											{state.t('save')}
										</HtmlButton>
									</HtmlDiv>
								</HtmlDiv>
							{:else}
								<HtmlDiv class="localization-translation-editor__cell">
									{#if value}
										<HtmlSpan lang={state.editor.currentLocale} dir="auto">{value}</HtmlSpan>
									{:else}
										<HtmlSpan class="localization-translation-editor__muted"
											>{state.t('missing')}</HtmlSpan
										>
									{/if}
									<HtmlButton
										type="button"
										class="localization-translation-editor__icon-button localization-translation-editor__icon-button--plain"
										aria-label={state.t('edit', { key: text.key })}
										title={state.t('edit', { key: text.key })}
										onclick={() => state.editor.beginEdit(text)}
									>
										<BaseIcon name="edit-3" size={16} />
									</HtmlButton>
								</HtmlDiv>
							{/if}
						</HtmlTd>
						{#if state.editor.showContextColumn}
							<HtmlTd class="localization-translation-editor__muted">{text.context || '—'}</HtmlTd>
						{/if}
						{#if state.editor.showStatusColumn}
							<HtmlTd>
								<HtmlSpan class="localization-translation-editor__status" data-status={text.status}>
									{state.t(text.status)}
								</HtmlSpan>
							</HtmlTd>
						{/if}
						<HtmlTd class="localization-translation-editor__end">
							<HtmlButton
								type="button"
								class="localization-translation-editor__icon-button localization-translation-editor__icon-button--plain"
								aria-label={state.t('clear', { key: text.key })}
								title={state.t('clear', { key: text.key })}
								disabled={!value}
								onclick={() => state.editor.clear(text)}
							>
								<BaseIcon name="trash" size={16} />
							</HtmlButton>
						</HtmlTd>
					</HtmlTr>
				{:else}
					<HtmlTr>
						<HtmlTd colspan={state.editor.columns} class="localization-translation-editor__muted">
							{state.t('empty')}
						</HtmlTd>
					</HtmlTr>
				{/each}
			</HtmlTbody>
		</HtmlTable>
	</HtmlDiv>
</HtmlSection>

<style>
	@layer html, typography, svg, mathml, layout, theme, localization;
	@layer localization {
		:global {
			:where(.localization-translation-editor) {
				--localization-translation-editor-pad: calc(var(--space-4) * var(--density-scale, 1));
				overflow: hidden;
				border: var(--border-width-thin, 1px) solid var(--color-border-primary);
				border-radius: var(--radius-3);
				background: var(--color-background-primary);
				box-shadow: var(--elevation-level1);
				color: var(--color-text-primary);
			}
			:where(.localization-translation-editor__header) {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				gap: var(--space-2);
				padding: calc(var(--space-3) * var(--density-scale, 1))
					var(--localization-translation-editor-pad);
				border-block-end: var(--border-width-thin, 1px) solid var(--color-border-primary);
			}
			:where(.localization-translation-editor__title) {
				display: flex;
				align-items: center;
				gap: var(--space-2);
				margin: 0;
			}
			:where(
				.localization-translation-editor__actions,
				.localization-translation-editor__editor-actions
			) {
				display: flex;
				gap: var(--space-2);
			}
			:where(.localization-translation-editor__file) {
				display: none;
			}
			:where(
				.localization-translation-editor__icon-button,
				.localization-translation-editor__button
			) {
				display: inline-flex;
				align-items: center;
				gap: var(--space-1);
				padding: var(--space-1) var(--space-2);
				border: var(--border-width-thin, 1px) solid var(--color-border-primary);
				border-radius: var(--radius-1);
				background: var(--color-background-primary);
				color: inherit;
				font: inherit;
				cursor: pointer;
			}
			:where(
				.localization-translation-editor__icon-button,
				.localization-translation-editor__button
			):hover {
				background: var(--color-background-secondary);
			}
			:where(
				.localization-translation-editor__icon-button,
				.localization-translation-editor__button
			):focus-visible {
				outline: 2px solid var(--color-primary-500);
				outline-offset: 1px;
			}
			:where(.localization-translation-editor__icon-button--plain) {
				padding: 0;
				border: 0;
				background: none;
				color: var(--color-text-secondary);
			}
			:where(.localization-translation-editor__icon-button--plain):hover {
				background: none;
				color: var(--color-text-primary);
			}
			:where(.localization-translation-editor__icon-button):disabled {
				opacity: 0.4;
				cursor: default;
			}
			:where(.localization-translation-editor__scroll) {
				overflow-x: auto;
			}
			:where(.localization-translation-editor__table) {
				inline-size: 100%;
				border-collapse: collapse;
			}
			:where(.localization-translation-editor__table th) {
				padding: var(--space-2) var(--localization-translation-editor-pad);
				background: var(--color-background-secondary);
				color: var(--color-text-secondary);
				font-size: 0.75em;
				font-weight: var(--font-weight-medium);
				text-align: start;
			}
			:where(.localization-translation-editor__table td) {
				padding: var(--space-2) var(--localization-translation-editor-pad);
				border-block-start: var(--border-width-thin, 1px) solid var(--color-border-secondary);
				vertical-align: top;
			}
			:where(.localization-translation-editor__table .localization-translation-editor__end) {
				text-align: end;
			}
			:where(.localization-translation-editor__muted) {
				color: var(--color-text-secondary);
			}
			:where(.localization-translation-editor__cell) {
				display: flex;
				align-items: flex-start;
				justify-content: space-between;
				gap: var(--space-2);
			}
			:where(.localization-translation-editor__editor) {
				display: grid;
				gap: var(--space-2);
				padding: var(--space-2);
				border: var(--border-width-thin, 1px) solid var(--color-border-primary);
				border-radius: var(--radius-1);
			}
			:where(.localization-translation-editor__textarea) {
				box-sizing: border-box;
				inline-size: 100%;
				padding: var(--space-1);
				border: var(--border-width-thin, 1px) solid var(--color-border-secondary);
				border-radius: var(--radius-1);
				background: var(--color-background-primary);
				color: inherit;
				font: inherit;
				resize: vertical;
			}
			:where(.localization-translation-editor__editor-actions) {
				justify-content: flex-end;
			}
			:where(.localization-translation-editor__status) {
				display: inline-block;
				padding: 0 var(--space-2);
				border-radius: var(--radius-full);
				background: var(--color-background-secondary);
				font-size: 0.75em;
				white-space: nowrap;
			}
			:where(.localization-translation-editor__status[data-status='translated']) {
				color: var(--color-success-600, var(--color-text-primary));
			}
			:where(.localization-translation-editor__status[data-status='needs-review']) {
				color: var(--color-warning-600, var(--color-text-primary));
			}
			:where(.localization-translation-editor__status[data-status='untranslated']) {
				color: var(--color-danger-600, var(--color-text-secondary));
			}
		}
	}
</style>
