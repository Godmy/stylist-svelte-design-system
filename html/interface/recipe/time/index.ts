import type { HTMLTimeAttributes } from 'svelte/elements';

/** `<time>`: Machine-readable equivalent of date- or time-related data. */
export interface RecipeHtmlTime extends HTMLTimeAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLTimeElement | null;
}
