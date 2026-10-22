import type { HTMLAttributes } from 'svelte/elements';
import type { SlotHtmlText } from '$stylist/html/interface/slot/html-text';

/** `<title>`: Document title. */
export interface RecipeHtmlTitle
	extends Omit<HTMLAttributes<HTMLTitleElement>, 'children'>, SlotHtmlText {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTitleElement | null;
}
