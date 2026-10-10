import type { HTMLAttributes } from 'svelte/elements';

/** `<main>`: Container for the dominant contents of the document. */
export interface RecipeHtmlMain extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
