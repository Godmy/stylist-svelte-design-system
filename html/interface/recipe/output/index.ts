import type { HTMLOutputAttributes } from 'svelte/elements';

/** `<output>`: Calculated output value. */
export interface RecipeHtmlOutput extends HTMLOutputAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLOutputElement | null;
}
