import type { HTMLLabelAttributes } from 'svelte/elements';

/** `<label>`: Caption for a form control. */
export interface RecipeHtmlLabel extends HTMLLabelAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLLabelElement | null;
}
