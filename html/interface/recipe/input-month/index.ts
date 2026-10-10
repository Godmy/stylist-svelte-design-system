import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="month">`: trait of `<input>`. */
export interface RecipeHtmlInputMonth extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
