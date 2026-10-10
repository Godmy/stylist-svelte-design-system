import type { HTMLInsAttributes } from 'svelte/elements';

/** `<ins>`: An addition to the document. */
export interface RecipeHtmlIns extends HTMLInsAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLModElement | null;
}
