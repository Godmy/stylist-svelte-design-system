import type { HTMLTdAttributes } from 'svelte/elements';

/** `<td>`: Table cell. */
export interface RecipeHtmlTd extends HTMLTdAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableCellElement | null;
}
