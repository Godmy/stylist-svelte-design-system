import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="number">`: trait of `<input>`. */
export interface RecipeHtmlInputNumber extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
