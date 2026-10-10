import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input>`: Form control. */
export interface RecipeHtmlInput extends Omit<HTMLInputAttributes, 'children'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
