/** Character data of text-only elements (`title`, `style`, `script`). */
export interface SlotHtmlText {
	/** Trusted author text; `style`/`script` insert it without escaping. */
	text?: string;
}
