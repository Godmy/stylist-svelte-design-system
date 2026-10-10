import type { HTMLAttributes } from 'svelte/elements';

/** `<search>`: Container for search controls. */
export interface RecipeHtmlSearch extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
