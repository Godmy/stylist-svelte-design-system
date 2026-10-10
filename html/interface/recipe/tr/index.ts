import type { HTMLAttributes } from 'svelte/elements';

/** `<tr>`: Table row. */
export interface RecipeHtmlTr extends HTMLAttributes<HTMLTableRowElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableRowElement | null;
}
