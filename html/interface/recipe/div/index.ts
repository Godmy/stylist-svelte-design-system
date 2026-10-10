import type { HTMLAttributes } from 'svelte/elements';

/** `<div>`: Generic flow container, or container for name-value groups in dl elements. */
export interface RecipeHtmlDiv extends HTMLAttributes<HTMLDivElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLDivElement | null;
}
