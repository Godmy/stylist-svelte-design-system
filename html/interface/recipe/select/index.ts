import type { HTMLSelectAttributes } from 'svelte/elements';

/** `<select>`: List box control. */
export interface RecipeHtmlSelect extends HTMLSelectAttributes {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLSelectElement | null;
}
