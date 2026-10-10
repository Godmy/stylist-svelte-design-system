import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="button">`: trait of `<input>`. */
export interface RecipeHtmlInputButton extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
