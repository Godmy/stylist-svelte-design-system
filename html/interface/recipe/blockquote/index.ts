import type { HTMLBlockquoteAttributes } from 'svelte/elements';

/** `<blockquote>`: A section quoted from another source. */
export interface RecipeHtmlBlockquote extends HTMLBlockquoteAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLQuoteElement | null;
}
