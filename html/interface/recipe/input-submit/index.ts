import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="submit">`: trait of `<input>`. */
export interface RecipeHtmlInputSubmit extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
