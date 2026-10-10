import type { HTMLAttributes } from 'svelte/elements';

/** `<abbr>`: Abbreviation. */
export interface RecipeHtmlAbbr extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
