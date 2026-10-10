import type { HTMLOlAttributes } from 'svelte/elements';

/** `<ol>`: Ordered list. */
export interface RecipeHtmlOl extends HTMLOlAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLOListElement | null;
}
