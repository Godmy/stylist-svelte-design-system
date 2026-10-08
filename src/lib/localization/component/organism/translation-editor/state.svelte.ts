import type { TranslatableText } from '$stylist/localization/type/object/translatable-text';
import type { RecipeTranslationEditor } from '$stylist/localization/interface/recipe/translation-editor';

export function createTranslationEditorState(props: RecipeTranslationEditor) {
	const texts = props.texts ?? [];
	const locales = props.locales ?? [];
	const defaultLocale = props.defaultLocale ?? 'en';
	const currentLocale = props.currentLocale ?? 'en';
	const showKeyColumn = props.showKeyColumn ?? true;
	const showContextColumn = props.showContextColumn ?? true;
	const showStatusColumn = props.showStatusColumn ?? true;

	let editingId = $state<string | null>(null);
	let editedValue = $state('');

	function beginEdit(text: TranslatableText) {
		editingId = text.id;
		editedValue = text.translations[currentLocale] || '';
	}

	function saveEdit() {
		if (!editingId) return;
		const text = texts.find((item) => item.id === editingId);
		if (!text) return;
		text.translations[currentLocale] = editedValue;
		props.onTranslationChange?.(text.key, currentLocale, editedValue);
		editingId = null;
	}

	function cancelEdit() {
		editingId = null;
	}

	const rootClass = $derived(['c-translation-editor', props.class].filter(Boolean).join(' '));
	const panelClass = $derived('c-translation-editor__panel');
	const headerClass = $derived(
		['c-translation-editor__header', props.headerClass].filter(Boolean).join(' ')
	);
	const tableClass = $derived(
		['c-translation-editor__table', props.tableClass].filter(Boolean).join(' ')
	);
	const rowClass = $derived(
		['c-translation-editor__row', props.rowClass].filter(Boolean).join(' ')
	);
	const editorClass = $derived(
		['c-translation-editor__editor', props.editorClass].filter(Boolean).join(' ')
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			texts: _texts,
			locales: _locales,
			defaultLocale: _defaultLocale,
			currentLocale: _currentLocale,
			headerClass: _headerClass,
			tableClass: _tableClass,
			rowClass: _rowClass,
			editorClass: _editorClass,
			showKeyColumn: _showKeyColumn,
			showContextColumn: _showContextColumn,
			showStatusColumn: _showStatusColumn,
			onTranslationChange: _onTranslationChange,
			onSave: _onSave,
			onImport: _onImport,
			onExport: _onExport,
			...rest
		} = props;
		return rest;
	});

	return {
		get iconDownload() {
			return 'download';
		},
		get iconEdit() {
			return 'edit-3';
		},
		get iconLanguages() {
			return 'languages';
		},
		get iconSave() {
			return 'save';
		},
		get iconTrash() {
			return 'trash';
		},
		get iconUpload() {
			return 'upload';
		},
		get texts() {
			return texts;
		},
		get locales() {
			return locales;
		},
		get defaultLocale() {
			return defaultLocale;
		},
		get currentLocale() {
			return currentLocale;
		},
		get showKeyColumn() {
			return showKeyColumn;
		},
		get showContextColumn() {
			return showContextColumn;
		},
		get showStatusColumn() {
			return showStatusColumn;
		},
		get editingId() {
			return editingId;
		},
		get editedValue() {
			return editedValue;
		},
		set editedValue(value: string) {
			editedValue = value;
		},
		get rootClass() {
			return rootClass;
		},
		get panelClass() {
			return panelClass;
		},
		get headerClass() {
			return headerClass;
		},
		get tableClass() {
			return tableClass;
		},
		get rowClass() {
			return rowClass;
		},
		get editorClass() {
			return editorClass;
		},
		get restProps() {
			return restProps;
		},
		beginEdit,
		saveEdit,
		cancelEdit
	};
}
