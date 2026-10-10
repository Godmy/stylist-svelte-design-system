import type { HTMLAttributes } from 'svelte/elements';

/** `<var>`: Variable. */
export interface RecipeHtmlVar extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
