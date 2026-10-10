import type { HTMLOptionAttributes } from 'svelte/elements';

/** `<option>`: Option in a list box or combo box control. */
export interface RecipeHtmlOption extends HTMLOptionAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLOptionElement | null;
}
