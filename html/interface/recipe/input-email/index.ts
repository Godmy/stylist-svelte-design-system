import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="email">`: trait of `<input>`. */
export interface RecipeHtmlInputEmail extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
