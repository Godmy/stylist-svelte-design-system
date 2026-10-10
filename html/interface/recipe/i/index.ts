import type { HTMLAttributes } from 'svelte/elements';

/** `<i>`: Alternate voice. */
export interface RecipeHtmlI extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
