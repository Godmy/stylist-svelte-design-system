import type { HTMLDataAttributes } from 'svelte/elements';

/** `<data>`: Machine-readable equivalent. */
export interface RecipeHtmlData extends HTMLDataAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLDataElement | null;
}
