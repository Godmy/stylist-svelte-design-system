import { LOCALIZATION_TRANSLATION_EDITOR_MESSAGE } from '$stylist/localization/const/record/translation-editor-message';
import { useMessage } from '$stylist/localization/function/hook/use-message';
import type { RecipeTranslationEditor } from '$stylist/localization/interface/recipe/translation-editor';
import type { TranslatableText } from '$stylist/localization/type/object/translatable-text';
/** Reactive behavior of translation-editor; props are read lazily when needed. */
export function createTranslationEditorState(
	getProps: () => Pick<RecipeTranslationEditor, 'onImport'> & {
		__rest: Omit<RecipeTranslationEditor, 'onSave' | 'onImport' | 'onExport'>;
	}
) {
	function createTranslationEditorState(
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
			get texts(): typeof texts {
				return texts;
			},
			get defaultLocale(): typeof defaultLocale {
				return defaultLocale;
			},
			get currentLocale(): typeof currentLocale {
				return currentLocale;
			},
			get showKeyColumn(): typeof showKeyColumn {
				return showKeyColumn;
			},
			get showContextColumn(): typeof showContextColumn {
				return showContextColumn;
			},
			get showStatusColumn(): typeof showStatusColumn {
				return showStatusColumn;
			},
			get columns(): typeof columns {
				return columns;
			},
			get editingId(): typeof editingId {
				return editingId;
			},
			get editedValue(): typeof editedValue {
				return editedValue;
			},
			set editedValue(value: string) {
				editedValue = value;
			},
			get restProps(): typeof restProps {
				return restProps;
			},
			translation,
			beginEdit,
			saveEdit,
			cancelEdit,
			clear
		};
	}
	const props = $derived(getProps());
	const t = useMessage('translation-editor', LOCALIZATION_TRANSLATION_EDITOR_MESSAGE);
	const editor = createTranslationEditorState(() => props.__rest);
	let fileInput = $state<HTMLInputElement | null>(null);
	// The chosen file goes to the site as is: only the site knows its format.
	function importFile(event: Event) {
		const input = event.currentTarget as HTMLInputElement;
		const file = input.files?.[0];
		if (file) props['onImport']?.(file);
		input.value = '';
	}
	return {
		get t(): typeof t {
			return t;
		},
		get editor(): typeof editor {
			return editor;
		},
		get fileInput(): typeof fileInput {
			return fileInput;
		},
		set fileInput(__nextValue: typeof fileInput) {
			fileInput = __nextValue;
		},
		get importFile(): typeof importFile {
			return importFile;
		}
	};
}
export default createTranslationEditorState;
