import type { HTMLAttributes } from 'svelte/elements';

/** `<thead>`: Group of heading rows in a table. */
export interface RecipeHtmlThead extends HTMLAttributes<HTMLTableSectionElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableSectionElement | null;
}
