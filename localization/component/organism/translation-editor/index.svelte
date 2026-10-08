<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import { createTranslationEditorState } from './state.svelte';
	import type { RecipeTranslationEditor } from '$stylist/localization/interface/recipe/translation-editor';

	let {
		onTranslationChange,
		onSave,
		onImport,
		onExport,
		...stateProps
	}: RecipeTranslationEditor = $props();

	const state = createTranslationEditorState(stateProps);
</script>

<div class={state.rootClass} {...state.restProps}>
	<div class={state.panelClass}>
		<div class={state.headerClass}>
			<div class="c-translation-editor__header-inner">
				<BaseIcon name={state.iconLanguages} class="_c1" />
				<span class="c-translation-editor__title">Translation Editor</span>
			</div>
			<div class="c-translation-editor__actions">
				<button
					type="button"
					class="c-translation-editor__action-btn"
					onclick={() => onImport?.({})}
				>
					<BaseIcon name={state.iconUpload} class="_c2" />
				</button>
				<button type="button" class="c-translation-editor__action-btn" onclick={() => onExport?.()}>
					<BaseIcon name={state.iconDownload} class="_c2" />
				</button>
				{#if onSave}
					<button type="button" class="c-translation-editor__action-btn" onclick={() => onSave?.()}>
						<BaseIcon name={state.iconSave} class="_c2" />
					</button>
				{/if}
			</div>
		</div>

		<div class="c-translation-editor__table-wrapper">
			<table class={state.tableClass}>
				<thead class="c-translation-editor__thead">
					<tr>
						{#if state.showKeyColumn}
							<th class="c-translation-editor__th">Key</th>
						{/if}
						<th class="c-translation-editor__th">Source ({state.defaultLocale})</th>
						<th class="c-translation-editor__th">Translation ({state.currentLocale})</th>
						{#if state.showContextColumn}
							<th class="c-translation-editor__th">Context</th>
						{/if}
						{#if state.showStatusColumn}
							<th class="c-translation-editor__th">Status</th>
						{/if}
						<th class="c-translation-editor__th c-translation-editor__th--right">Actions</th>
					</tr>
				</thead>
				<tbody>
					{#each state.texts as text}
						<tr class={state.rowClass}>
							{#if state.showKeyColumn}
								<td class="c-translation-editor__td c-translation-editor__td--secondary">
									{text.key}
								</td>
							{/if}
							<td class="c-translation-editor__td">{text.original}</td>
							<td class="c-translation-editor__td">
								{#if state.editingId === text.id}
									<div class={state.editorClass}>
										<textarea
											class="c-translation-editor__textarea"
											rows={3}
											bind:value={state.editedValue}
										></textarea>
										<div class="c-translation-editor__editor-actions">
											<button
												type="button"
												class="c-translation-editor__action-btn"
												onclick={() => state.cancelEdit()}
											>
												Cancel
											</button>
											<button
												type="button"
												class="c-translation-editor__action-btn"
												onclick={state.saveEdit}
											>
												Save
											</button>
										</div>
									</div>
								{:else}
									<div class="c-translation-editor__cell-content">
										<div>{text.translations[state.currentLocale] || '-'}</div>
										<button
											type="button"
											class="c-translation-editor__edit-btn"
											onclick={() => state.beginEdit(text)}
										>
											<BaseIcon name={state.iconEdit} class="_c2" />
										</button>
									</div>
								{/if}
							</td>
							{#if state.showContextColumn}
								<td class="c-translation-editor__td c-translation-editor__td--secondary">
									{text.context || '-'}
								</td>
							{/if}
							{#if state.showStatusColumn}
								<td class="c-translation-editor__td">{text.status}</td>
							{/if}
							<td class="c-translation-editor__td c-translation-editor__td--right">
								<button
									type="button"
									class="c-translation-editor__edit-btn"
									onclick={() => onTranslationChange?.(text.key, state.currentLocale, '')}
								>
									<BaseIcon name={state.iconTrash} class="_c2" />
								</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>

<style>
	.c-translation-editor__panel {
		background: var(--color-background-primary);
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		overflow: hidden;
	}

	.c-translation-editor__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--color-border-primary);
		padding: 0.75rem 1rem;
	}

	.c-translation-editor__header-inner {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.c-translation-editor__title {
		font-weight: 600;
	}

	.c-translation-editor__actions {
		display: flex;
		gap: 0.5rem;
	}

	.c-translation-editor__action-btn {
		display: inline-flex;
		align-items: center;
		border-radius: 0.25rem;
		border: 1px solid var(--color-border-primary);
		padding: 0.25rem 0.5rem;
		background: var(--color-background-primary);
		cursor: pointer;
		font-size: 0.875rem;
	}

	.c-translation-editor__action-btn:hover {
		background: var(--color-background-secondary);
	}

	.c-translation-editor__table-wrapper {
		overflow-x: auto;
	}

	.c-translation-editor__table {
		min-width: 100%;
		border-collapse: collapse;
	}

	.c-translation-editor__thead {
		background: var(--color-background-secondary);
		text-align: left;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.c-translation-editor__th {
		padding: 0.5rem 1rem;
		font-weight: 500;
	}

	.c-translation-editor__th--right {
		text-align: right;
	}

	.c-translation-editor__row {
		border-top: 1px solid var(--color-border-secondary);
	}

	.c-translation-editor__td {
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}

	.c-translation-editor__td--secondary {
		color: var(--color-text-secondary);
	}

	.c-translation-editor__td--right {
		text-align: right;
	}

	.c-translation-editor__editor {
		border-radius: 0.25rem;
		border: 1px solid var(--color-border-primary);
		padding: 0.5rem;
		background: var(--color-background-primary);
	}

	.c-translation-editor__textarea {
		width: 100%;
		border-radius: 0.25rem;
		border: 1px solid var(--color-border-secondary);
		padding: 0.25rem;
		font-size: inherit;
		font-family: inherit;
		resize: vertical;
	}

	.c-translation-editor__editor-actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
		margin-top: 0.5rem;
	}

	.c-translation-editor__cell-content {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.c-translation-editor__edit-btn {
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;
		color: var(--color-text-secondary);
		flex-shrink: 0;
		display: inline-flex;
	}

	.c-translation-editor__edit-btn:hover {
		color: var(--color-text-primary);
	}

	._c1 {
		height: 1.25rem;
		width: 1.25rem;
	}
	._c2 {
		height: 1rem;
		width: 1rem;
	}
</style>
