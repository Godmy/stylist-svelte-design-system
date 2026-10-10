import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="date">`: trait of `<input>`. */
export interface RecipeHtmlInputDate extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
