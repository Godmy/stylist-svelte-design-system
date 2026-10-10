import type { HTMLColgroupAttributes } from 'svelte/elements';

/** `<colgroup>`: Group of columns in a table. */
export interface RecipeHtmlColgroup extends HTMLColgroupAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableColElement | null;
}
