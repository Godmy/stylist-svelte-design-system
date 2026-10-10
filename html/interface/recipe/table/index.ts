import type { HTMLTableAttributes } from 'svelte/elements';

/** `<table>`: Table. */
export interface RecipeHtmlTable extends HTMLTableAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTableElement | null;
}
