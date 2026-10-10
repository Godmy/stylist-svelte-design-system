import type { HTMLInputAttributes } from 'svelte/elements';

/** `<input type="time">`: trait of `<input>`. */
export interface RecipeHtmlInputTime extends Omit<HTMLInputAttributes, 'children' | 'type'> {
	/** Bound DOM node (`bind:element`). */
	element?: HTMLInputElement | null;
}
