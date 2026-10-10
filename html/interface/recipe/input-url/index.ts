import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="url">`: trait of `<input>`. */
export interface RecipeHtmlInputUrl extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
