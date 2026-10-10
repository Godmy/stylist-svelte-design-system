import type { HTMLSlotAttributes } from 'svelte/elements';

/** `<slot>`: Shadow tree slot. */
export interface RecipeHtmlSlot extends HTMLSlotAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLSlotElement | null;
}
