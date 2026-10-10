import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="image">`: trait of `<input>`. */
export interface RecipeHtmlInputImage extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
