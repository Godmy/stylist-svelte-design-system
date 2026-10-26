import type { TranslatableText } from '$stylist/localization/type/object/translatable-text';
import type { RecipeTranslationEditor } from '$stylist/localization/interface/recipe/translation-editor';

/**
 * Edits stay in a local layer over `texts` (the prop is never mutated) and go to
 * `onTranslationChange`; new `texts` from the parent replace the layer.
 */
export function createTranslationEditorState(
	getProps: () => Omit<RecipeTranslationEditor, 'onSave' | 'onImport' | 'onExport'>
) {
	const props = $derived(getProps());
	const texts = $derived(props.texts ?? []);
	const defaultLocale = $derived(props.defaultLocale ?? 'en');
	const currentLocale = $derived(props.currentLocale ?? 'en');
	const showKeyColumn = $derived(props.showKeyColumn ?? true);
	const showContextColumn = $derived(props.showContextColumn ?? true);
	const showStatusColumn = $derived(props.showStatusColumn ?? true);
	const columns = $derived(
		3 + Number(showKeyColumn) + Number(showContextColumn) + Number(showStatusColumn)
	);

	let editingId = $state<string | null>(null);
	let editedValue = $state('');
	let edits = $state<Record<string, Record<string, string>>>({});

	$effect.pre(() => {
		void props.texts;
		edits = {};
		editingId = null;
	});

	function translation(text: TranslatableText): string {
		return edits[text.id]?.[currentLocale] ?? text.translations[currentLocale] ?? '';
	}

	function write(text: TranslatableText, value: string) {
		edits = { ...edits, [text.id]: { ...edits[text.id], [currentLocale]: value } };
		props.onTranslationChange?.(text.key, currentLocale, value);
	}

	function beginEdit(text: TranslatableText) {
		editingId = text.id;
		editedValue = translation(text);
	}

	function saveEdit() {
		const text = texts.find((item) => item.id === editingId);
		if (text) write(text, editedValue);
		editingId = null;
	}

	function cancelEdit() {
		editingId = null;
	}

	function clear(text: TranslatableText) {
		write(text, '');
	}

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
			...rest
		} = props;
		return rest;
	});

	return {
		get texts() {
			return texts;
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
		get columns() {
			return columns;
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
		get restProps() {
			return restProps;
		},
		translation,
		beginEdit,
		saveEdit,
		cancelEdit,
		clear
	};
}

export default createTranslationEditorState;
