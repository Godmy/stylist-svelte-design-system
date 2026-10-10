import type { HTMLAttributes } from 'svelte/elements';

/** `<tfoot>`: Group of footer rows in a table. */
export interface RecipeHtmlTfoot extends HTMLAttributes<HTMLTableSectionElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableSectionElement | null;
}
