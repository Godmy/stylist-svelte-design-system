import type { HTMLAttributes } from 'svelte/elements';

/** `<sup>`: Superscript. */
export interface RecipeHtmlSup extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
