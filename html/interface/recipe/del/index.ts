import type { HTMLDelAttributes } from 'svelte/elements';

/** `<del>`: A removal from the document. */
export interface RecipeHtmlDel extends HTMLDelAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLModElement | null;
}
