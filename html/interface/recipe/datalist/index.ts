import type { HTMLAttributes } from 'svelte/elements';

/** `<datalist>`: Container for options for combo box control. */
export interface RecipeHtmlDatalist extends HTMLAttributes<HTMLDataListElement> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLDataListElement | null;
}
