import type { HTMLThAttributes } from 'svelte/elements';

/** `<th>`: Table header cell. */
export interface RecipeHtmlTh extends HTMLThAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableCellElement | null;
}
