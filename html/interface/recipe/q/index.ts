import type { HTMLQuoteAttributes } from 'svelte/elements';

/** `<q>`: Quotation. */
export interface RecipeHtmlQ extends HTMLQuoteAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLQuoteElement | null;
}
