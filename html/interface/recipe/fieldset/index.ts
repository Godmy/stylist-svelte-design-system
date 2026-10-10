import type { HTMLFieldsetAttributes } from 'svelte/elements';

/** `<fieldset>`: Group of form controls. */
export interface RecipeHtmlFieldset extends HTMLFieldsetAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLFieldSetElement | null;
}
