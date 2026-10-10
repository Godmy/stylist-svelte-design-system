import type { HTMLAttributes } from 'svelte/elements';

/** `<mark>`: Highlight. */
export interface RecipeHtmlMark extends HTMLAttributes<HTMLElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLElement | null;
}
