import type { HTMLAttributes } from 'svelte/elements';

/** `<span>`: Generic phrasing container. */
export interface RecipeHtmlSpan extends HTMLAttributes<HTMLSpanElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLSpanElement | null;
}
