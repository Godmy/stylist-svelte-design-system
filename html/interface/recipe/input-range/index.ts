import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="range">`: trait of `<input>`. */
export interface RecipeHtmlInputRange extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
