import type { TranslatableText } from '$stylist/localization/type/object/translatable-text';
export interface SlotExtendedTranslationEditor {
	/** Texts with their translations by locale; edits go to `onTranslationChange`. */
	texts?: TranslatableText[];
	/** Locales of the texts. */
	locales?: string[];
	/** Locale of the source column (default `en`). */
	defaultLocale?: string;
	/** Locale being translated (default `en`). */
	currentLocale?: string;
	class?: string;
	headerClass?: string;
	tableClass?: string;
	rowClass?: string;
	editorClass?: string;
	/** Key column (default true). */
	showKeyColumn?: boolean;
	/** Context column (default true). */
	showContextColumn?: boolean;
	/** Status column (default true). */
	showStatusColumn?: boolean;
	/** A saved or cleared (`''`) translation. */
	onTranslationChange?: (key: string, locale: string, value: string) => void;
	/** Shows the save button. */
	onSave?: () => void;
	/** Shows the import button; receives the chosen `.json` file, which the site parses. */
	onImport?: (file: File) => void;
	/** Shows the export button. */
	onExport?: () => void;
}
