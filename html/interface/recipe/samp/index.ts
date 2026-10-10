import type { HTMLAttributes } from 'svelte/elements';

/** `<samp>`: Computer output. */
export interface RecipeHtmlSamp extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
