import type { HTMLAttributes } from 'svelte/elements';

/** `<tbody>`: Group of rows in a table. */
export interface RecipeHtmlTbody extends HTMLAttributes<HTMLTableSectionElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableSectionElement | null;
}
